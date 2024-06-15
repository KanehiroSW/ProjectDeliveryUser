import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Tienda } from './Tienda';
import { map } from 'rxjs';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  
  private apiUrlTienda = `${environment.urlHost}api/tienda`;
  // private apiUrlProduct = `${environment.urlHost}api/producto`;

  constructor(private http: HttpClient) { }

  listTiendas() {
    return this.http.get<Tienda[]>(`${this.apiUrlTienda}/all`, { withCredentials: true })
      .pipe(
        map(tiendas => {
          return tiendas.map(tienda => {
            if (tienda.imagen) {
              tienda.imagenUrl = `${environment.urlHost}api/images/tienda/${tienda.imagen}`;
            }
            return tienda;
          });
        })
      );
  }
  
  // listProductos(idTienda: number) {
  //   return this.http.get<Producto[]>(`${this.apiUrlProduct}/list`, {
  //     params: { idTienda: idTienda.toString() },
  //     withCredentials: true
  //   }).pipe(
  //     map(products => {
  //       return products.map(product => {
  //         if (product.imagen) {
  //           product.imagenUrl = `${environment.urlHost}api/images/producto/${product.imagen}`;
  //         }
  //         return {
  //           ...product,
  //           quantity: 1
  //         };
  //       });
  //     })
  //   );
  // }
}
