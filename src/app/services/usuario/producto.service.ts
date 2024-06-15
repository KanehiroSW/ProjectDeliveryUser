import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from './Producto';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrlProduct = `${environment.urlHost}api/producto`;

  constructor(private http: HttpClient) { }

  listProductos(idTienda: number) {
    return this.http.get<Producto[]>(`${this.apiUrlProduct}/list`, {
      params: { idTienda: idTienda.toString() },
      withCredentials: true
    }).pipe(
      map(products => {
        return products.map(product => {
          if (product.imagen) {
            product.imagenUrl = `${environment.urlHost}api/images/producto/${product.imagen}`;
          }
          return {
            ...product,
            quantity: 1
          };
        });
      })
    );
  }
}
