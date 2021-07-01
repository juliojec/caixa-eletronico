import { DialogBoxService } from './../services/dialog-box.service';
import { BeneficiarioService } from './../services/beneficiario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cadastro-beneficiario',
  templateUrl: './cadastro-beneficiario.component.html',
  styleUrls: ['./cadastro-beneficiario.component.css']
})
export class CadastroBeneficiarioComponent implements OnInit {

  public onClose: Subject<any>;

  form: FormGroup;

  constructor(private dialogBox: DialogBoxService, public beneficiarioService: BeneficiarioService,
    public modalRef: BsModalRef, private validateBrService: ValidateBrService) {
  }

  ngOnInit() {
    this.onClose = new Subject();
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cpf: new FormControl('', [this.validateBrService.cpf, Validators.required]),
      saldoAposentadoria: new FormControl('', [Validators.required]),
      anosAposentadoria: new FormControl('', [this.validateBrService.integer, Validators.required])
    });
  }

  salvar() {
    this.beneficiarioService.cadastro(this.form.value).subscribe((data) => {
      this.fecharModal();
      this.dialogBox.show('Beneficiário cadastrado com sucesso', 'OK');
    });
  }

  public fecharModal(): void {
    this.onClose.next();
    this.modalRef.hide();
  }
}
