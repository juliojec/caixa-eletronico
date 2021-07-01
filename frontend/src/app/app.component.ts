import { CadastroBeneficiarioComponent } from './cadastro-beneficiario/cadastro-beneficiario.component';
import { DialogBoxService } from './services/dialog-box.service';
import { CaixaEletronicoComponent } from './caixa-eletronico/caixa-eletronico.component';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'brasilprev-front';
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  loading = true;

  constructor(private modalService: BsModalService, public dialogBox: DialogBoxService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  caixaEletronico(): void {
    this.modalService.show(CaixaEletronicoComponent, { backdrop: 'static', class: 'modal-md' })
    .content.onClose.subscribe(() => {
    });
  }

  cadastrarBeneficiario() {
    this.modalService.show(CadastroBeneficiarioComponent, { backdrop: 'static', class: 'modal-md' })
    .content.onClose.subscribe(() => {

    });
  }
}
