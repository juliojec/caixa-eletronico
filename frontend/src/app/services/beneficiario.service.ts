import { Beneficiario } from './../models/beneficiario';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  constructor(private http: HttpClient) {}

  cadastro(beneficiario: Beneficiario): Observable<Beneficiario> {
    return this.http.post<Beneficiario>(environment.baseUrlCadastro + '/beneficiario/cadastro', beneficiario);
  }

  consultaSaldo(cpf: String): Observable<Beneficiario> {
    return this.http.post<Beneficiario>(environment.baseUrlCadastro + '/beneficiario/consulta', cpf);
  }

}
