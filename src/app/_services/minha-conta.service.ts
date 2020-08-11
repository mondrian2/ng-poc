import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinhaContaService {

  constructor(private http: HttpClient) {}

  public getPedidos(codClient: any) {
    return this.http.get<any>(`/api/pedido/listar/`+codClient)
  }

  public getPedidoId(codOrder: any) {
    return of(codOrder)
  }
}
