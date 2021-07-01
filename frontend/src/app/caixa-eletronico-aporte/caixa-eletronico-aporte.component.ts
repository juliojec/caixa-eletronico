import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { CaixaService } from '../services/caixa.service';
import { DialogBoxService } from '../services/dialog-box.service';

@Component({
  selector: 'app-caixa-eletronico-aporte',
  templateUrl: './caixa-eletronico-aporte.component.html',
  styleUrls: ['./caixa-eletronico-aporte.component.css']
})
export class CaixaEletronicoAporteComponent implements OnInit {

  public onClose: Subject<any>;

  form: FormGroup;

  constructor(public dialogBox: DialogBoxService, public caixaService: CaixaService, public modalRef: BsModalRef,
    private validateBrService: ValidateBrService) {
  }

  ngOnInit() {
    this.onClose = new Subject();
    this.form = new FormGroup({
      cpf: new FormControl('', [this.validateBrService.cpf, Validators.required]),
      aporte: new FormControl('', [Validators.required]),
    });
  }

  salvar() {
    this.caixaService.aporte(this.form.value).subscribe((data) => {
      this.fecharModal();
      this.dialogBox.show('Aporte realizado com sucesso!', 'OK');
    }, (errorData) => {
      if (errorData.error) {
        this.dialogBox.show(errorData.error, 'Warning');
      }
    });
  }

  public fecharModal(): void {
    this.onClose.next();
    this.modalRef.hide();
  }

}
