import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Tienda } from './Tienda';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  
  private apiUrlTienda = `${environment.urlHost}api/tienda`;

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
}