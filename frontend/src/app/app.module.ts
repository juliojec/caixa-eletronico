import { BeneficiarioService } from './services/beneficiario.service';
import { BsModalService, ModalModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatGridListModule,
         MatIconModule,
         MatInputModule,
         MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaixaEletronicoComponent } from './caixa-eletronico/caixa-eletronico.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroBeneficiarioComponent } from './cadastro-beneficiario/cadastro-beneficiario.component';
import { HttpClientModule } from '@angular/common/http';
import { CaixaEletronicoAporteComponent } from './caixa-eletronico-aporte/caixa-eletronico-aporte.component';
import { CaixaEletronicoSaldoComponent } from './caixa-eletronico-saldo/caixa-eletronico-saldo.component';

@NgModule({
  declarations: [
    AppComponent,
    CaixaEletronicoComponent,
    DialogBoxComponent,
    CadastroBeneficiarioComponent,
    CaixaEletronicoAporteComponent,
    CaixaEletronicoSaldoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgbModule
  ],
  providers: [BsModalService, BeneficiarioService],
  entryComponents: [CaixaEletronicoAporteComponent, CaixaEletronicoSaldoComponent, CadastroBeneficiarioComponent,
    CaixaEletronicoComponent, DialogBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
