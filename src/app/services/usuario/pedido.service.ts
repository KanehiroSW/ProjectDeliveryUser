import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from './Producto';
import { Pedido } from './Pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrlPedido = `${environment.urlHost}api/pedido`;

  constructor(private http: HttpClient) {}

  savePedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.apiUrlPedido}/save`, pedido);
  }

  generarNumeroSerie(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
