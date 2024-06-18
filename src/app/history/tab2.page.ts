import { Component, OnInit } from '@angular/core';
import { Pedido } from '../services/class/Pedido';
import { Usuario } from '../services/auth/Usuario';
import { PedidoService } from '../services/usuario/pedido.service';
import { LoginService } from '../services/auth/login.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  pedidos: Pedido[] = [];
  user: Usuario | null = null;

  constructor(
    private pedidoService: PedidoService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.user = this.loginService.currentUserValue;
    if (this.user) {
      this.loadHistorialPedidos();
    }
  }

  ionViewWillEnter() {
    if (this.user) {
      this.loadHistorialPedidos();
    }
  }

  loadHistorialPedidos() {
    if (this.user) {
      this.pedidoService.getHistorialPedidos(this.user.idUsuario).subscribe(
        pedidos => {
          this.pedidos = pedidos;
        },
        error => {
          console.error('Error al cargar pedidos:', error);
          this.pedidos = [];
        }
      );
    }
  }
}