import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagos } from '../models/Pagos';
@Injectable({
  providedIn: 'root'
})
export class PagosService {
  API_URI = 'http://localhost:3000/api';
 // API_URI = 'http://localhost/src/data';



  constructor(private http: HttpClient) { }

  getPago(){
    return this.http.get(`${this.API_URI}/pago`)
  }

savePago(pago:Pagos){
  return this.http.post(`${this.API_URI}/pago`,pago)
}
deletePago(IDPago: number){
  return this.http.delete(`${this.API_URI}/pago/${IDPago}`);
  }

}
