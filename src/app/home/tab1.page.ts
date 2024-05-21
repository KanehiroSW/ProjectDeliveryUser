import { Component, OnInit, inject } from '@angular/core';
import { Tienda } from '../services/usuario/Tienda';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{
  
  private usuarioService = inject(UsuarioService);

  tiendas: Tienda[] = [];

  ngOnInit(): void {
    this.allTiendas();
  }

  allTiendas() {
    this.usuarioService.list()
      .subscribe(tiendas => {
        this.tiendas = tiendas;
      });
  }
}
