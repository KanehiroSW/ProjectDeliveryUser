import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
}
@Component({
  selector: 'app-detali-order',
  templateUrl: './detali-order.page.html',
  styleUrls: ['./detali-order.page.scss'],
})
export class DetaliOrderPage{

  products: Product[] = [
    {
      name: 'Galleta Casino de Chocolate',
      price: 1.50,
      image: 'assets/imagenes/casinocho.jpg'
    },
    {
      name: 'Chocolate Sublime',
      price: 2.00,
      image: 'assets/imagenes/sublime30g.jpg'
    },
    {
      name: 'Gaseosa 500ml. Coca-cola',
      price: 1.80,
      image: 'assets/imagenes/coca.jpg'
    }
  ];

  constructor() {}

  getTotalPrice(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

  confirmPurchase() {
    // Lógica para confirmar la compra
    console.log('Compra confirmada');
  }
}
