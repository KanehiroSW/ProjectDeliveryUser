import { Component, OnInit } from '@angular/core';
import { Producto } from '../services/usuario/Producto';
import { Router } from '@angular/router';
import { CartService } from '../services/usuario/cart.service';

@Component({
  selector: 'app-detali-order',
  templateUrl: './detali-order.page.html',
  styleUrls: ['./detali-order.page.scss'],
})
export class DetaliOrderPage implements OnInit {
  
  productos: Producto[]=[];
  total = 0;
  idTienda!: number;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.productos = this.cartService.getCartItems();
    this.calculateTotal();

    this.idTienda = parseInt(localStorage.getItem('idTienda') || '0', 10);
  }

  calculateTotal() {
    this.total = this.productos.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  }

  removeItem(producto: Producto) {
    this.cartService.removeProduct(producto);
    this.productos = this.cartService.getCartItems();
    this.calculateTotal();
  }

  continueToShipping() {
    this.router.navigate(['/detali-shipping']);
  }

  goToStore() {
    this.router.navigate(['/store', this.idTienda]);
  }
}
