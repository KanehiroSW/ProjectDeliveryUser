import { Component, OnInit, inject } from '@angular/core';
import { Tienda } from '../services/usuario/Tienda';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  tiendas: Tienda[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.allTiendas();
  }

  allTiendas() {
    this.usuarioService.listTiendas().subscribe(tiendas => {
      this.tiendas = tiendas;
    });
  }
}