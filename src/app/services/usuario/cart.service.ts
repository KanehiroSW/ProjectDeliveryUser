import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Producto[] = [];

  addProduct(producto: Producto) {
    const existingProduct = this.cart.find((item) => item.idProducto === producto.idProducto);
    if (existingProduct) {
      existingProduct.quantity += producto.quantity;
    } else {
      this.cart.push(producto);
    }
    console.log(this.cart);
  }

  removeProduct(producto: Producto) {
    this.cart = this.cart.filter((item) => item.idProducto !== producto.idProducto);
  }

  getCartItems(): Producto[] {
    return this.cart;
  }

  calculateTotal(): number {
    return this.cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
  }
}