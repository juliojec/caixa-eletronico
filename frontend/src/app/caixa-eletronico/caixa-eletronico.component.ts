import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ValidateBrService } from 'angular-validate-br';
import { DialogBoxService } from '../services/dialog-box.service';
import { CaixaEletronicoAporteComponent } from '../caixa-eletronico-aporte/caixa-eletronico-aporte.component';
import { CaixaEletronicoSaldoComponent } from '../caixa-eletronico-saldo/caixa-eletronico-saldo.component';

@Component({
  selector: 'app-caixa-eletronico',
  templateUrl: './caixa-eletronico.component.html',
  styleUrls: ['./caixa-eletronico.component.css']
})
export class CaixaEletronicoComponent implements OnInit {

  public onClose: Subject<any>;

  form: FormGroup;

  constructor(private modalService: BsModalService, public dialogBox: DialogBoxService,
    public modalRef: BsModalRef, private validateBrService: ValidateBrService) {
  }

  ngOnInit() {
    this.onClose = new Subject();
    this.form = new FormGroup({
      cpf: new FormControl('', [this.validateBrService.cpf, Validators.required]),
      aporte: new FormControl('', [Validators.required]),
    });
  }

  saldo() {
    this.modalService.show(CaixaEletronicoSaldoComponent, { backdrop: 'static', class: 'modal-md' })
    .content.onClose.subscribe(() => {});
    this.fecharModal();
  }

  aporte() {
    this.modalService.show(CaixaEletronicoAporteComponent, { backdrop: 'static', class: 'modal-md' })
    .content.onClose.subscribe(() => {});
    this.fecharModal();
  }

  public fecharModal(): void {
    this.onClose.next();
    this.modalRef.hide();
  }

}
