import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aporte } from '../models/aporte';
import { Beneficiario } from '../models/beneficiario';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {

  constructor(private http: HttpClient) {}

  aporte(aporte: Aporte): Observable<Beneficiario> {
    return this.http.post<Beneficiario>(environment.baseUrlCaixa + '/caixa/aporte', aporte);
  }
}
