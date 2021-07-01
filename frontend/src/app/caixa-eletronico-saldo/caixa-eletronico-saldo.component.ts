import { Beneficiario } from './../models/beneficiario';
import { DialogBoxService } from './../services/dialog-box.service';
import { BeneficiarioService } from './../services/beneficiario.service';
import { ValidateBrService } from 'angular-validate-br';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-caixa-eletronico-saldo',
  templateUrl: './caixa-eletronico-saldo.component.html',
  styleUrls: ['./caixa-eletronico-saldo.component.css']
})
export class CaixaEletronicoSaldoComponent implements OnInit {

  public onClose: Subject<any>;
  form: FormGroup;
  beneficiario: Beneficiario;

  constructor(public dialogBox: DialogBoxService, public beneficiarioService: BeneficiarioService,
    public validateBrService: ValidateBrService, public modalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
    this.form = new FormGroup({
      cpf: new FormControl('', this.validateBrService.cpf)
    });
  }

  public fecharModal(): void {
    this.onClose.next();
    this.modalRef.hide();
  }

  public consultaSaldo() {
    this.beneficiarioService.consultaSaldo(this.form.value).subscribe((beneficiario) => {
      this.beneficiario = beneficiario;
    }, (errorData) => {
      this.beneficiario = null;
      if (errorData.error) {
        this.dialogBox.show(errorData.error, 'Warning');
      }
    });
  }
}
