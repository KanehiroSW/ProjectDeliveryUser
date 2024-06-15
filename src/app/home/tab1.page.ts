import { Component, OnInit, inject } from '@angular/core';
import { Tienda } from '../services/usuario/Tienda';
import { TiendaService } from '../services/usuario/tienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  tiendas: Tienda[] = [];

  constructor(private tiendaService: TiendaService,  private router: Router) { }

  ngOnInit() {
    this.allTiendas();
  }

  allTiendas() {
    this.tiendaService.listTiendas().subscribe(tiendas => {
      this.tiendas = tiendas;
    });
  }

  goToStore(tienda: Tienda) {
    localStorage.setItem('idTienda', tienda.idTienda.toString());
    this.router.navigate(['/store', tienda.idTienda]);
  }
}