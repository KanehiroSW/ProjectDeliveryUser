import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Tienda } from './Tienda';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private apiUrl = `${environment.urlHost}api/tienda`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Tienda[]>(`${this.apiUrl}/all`,  { withCredentials: true });
  }

  
}
