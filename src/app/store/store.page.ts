import { Component } from '@angular/core';
interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage {
  products: Product[] = [
    {
      name: 'Casino Chocolate',
      description: 'Galleta de chocolate',
      price: '1.50',
      image: '/assets/ImgSProd/casinochocolate.png',
      quantity: 1
    },
    {
      name: 'Sublime',
      description: 'Base de cacao',
      price: '2.00',
      image: '/assets/ImgSProd/sublime.png',
      quantity: 1
    },
    {
      name: 'CocaCola 500ml',
      description: 'Bebida fresca',
      price: '1.80',
      image: '/assets/ImgSProd/cocacola.png',
      quantity: 1
    },
    {
      name: 'Soda V',
      description: 'Galleta del campo',
      price: '1.20',
      image: '/assets/ImgSProd/sodav.png',
      quantity: 1
    },
    {
      name: 'Papas Lays',
      description: 'Papas nativas',
      price: '1.50',
      image: '/assets/ImgSProd/lays.png',
      quantity: 1
    },
    {
      name: 'Chizitos',
      description: 'Base de queso',
      price: '1.50',
      image: '/assets/ImgSProd/chizitos.png',
      quantity: 1
    }
  ];

  filteredProducts: Product[] = this.products;

  constructor() {
  }
  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: Product) {
    product.quantity++;
  }

  onSearch(event: CustomEvent) {
    const searchTerm = event.detail.value;
    if (searchTerm.trim() !== '') {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}




