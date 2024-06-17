import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/usuario/pedido.service';
import { CartService } from '../services/usuario/cart.service';
import { Router } from '@angular/router';
import { Usuario } from '../services/auth/Usuario';
import { Tienda } from '../services/usuario/Tienda';
import { Pedido } from '../services/class/Pedido';
import { DetallePedido } from '../services/usuario/DetallePedido';
import { LoginService } from '../services/auth/login.service';


@Component({
  selector: 'app-detali-shipping',
  templateUrl: './detali-shipping.page.html',
  styleUrls: ['./detali-shipping.page.scss'],
})
export class DetaliShippingPage implements OnInit {

  pedido: Pedido = new Pedido();
  user: Usuario | null = null;
  direccionEntrega!: string;

  constructor(
    private loginService:LoginService,
    private cartService: CartService,
    private pedidoService: PedidoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.loginService.currentUserValue;
  }

  placeOrder() {
    const productos = this.cartService.getCartItems();
    const detallePedidos: DetallePedido[] = productos.map((producto) => ({
      producto: producto,
      cantidad: producto.quantity,
      precioUnitario: producto.precio,
      totalDetalle: producto.precio * producto.quantity,
    }));

    const pedido: Pedido = {
      direccionEntrega: this.direccionEntrega,
      fechaPedido: new Date(),
      usuario: { idUsuario: this.user?.idUsuario } as Usuario,
      tienda: { idTienda: parseInt(localStorage.getItem('idTienda') || '1', 10) } as Tienda,
      detallePedidos: detallePedidos,
      totalPedido: this.getTotal(),
    };

    this.pedidoService.savePedido(pedido).subscribe(
      () => {
        alert('Pedido realizado con éxito');
        this.cartService.clearCart();
        this.router.navigate(['/tabs/tab1']);
      },
      (error: Pedido) => {
        console.error('Error al realizar el pedido:', error);
      }
    );
  }

  getTotal() {
    const productos = this.cartService.getCartItems();
    return productos.reduce((i, j) => i + j.precio * j.quantity, 0);
  }

  goToOrder() {
    this.router.navigate(['/detali-order']);
  }
}