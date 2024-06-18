import { Component, OnInit } from '@angular/core';
import { Pedido } from '../services/class/Pedido';
import { Usuario } from '../services/auth/Usuario';
import { PedidoService } from '../services/usuario/pedido.service';
import { LoginService } from '../services/auth/login.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  pedidos: Pedido[] = [];
  user: Usuario | null = null;

  constructor(
    private pedidoService: PedidoService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.user = this.loginService.currentUserValue;
    if (this.user) {
      this.loadPendingPedidos();
    }
  }

  ionViewWillEnter() {
    if (this.user) {
      this.loadPendingPedidos();
    }
  }

  loadPendingPedidos() {
    if (this.user) {
      this.pedidoService.getPendingPedidos(this.user.idUsuario).subscribe(
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