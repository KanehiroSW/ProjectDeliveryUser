import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pedido } from '../class/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrlPedido = `${environment.urlHost}api/pedido`;

  constructor(private http: HttpClient) {}

  savePedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.apiUrlPedido}/save`, pedido);
  }
}