import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaStateService {

  private idTienda: number | null = null;

  setIdTienda(id: number) {
    this.idTienda = id;
  }

  getIdTienda(): number | null {
    return this.idTienda;
  }
}