import { Component } from '@angular/core';

interface Product {
  name: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage {
  products: Product[] = [
    {
      name: 'Galleta Casino de Chocolate',
      price: '1.50',
      image: 'assets/imagenes/casinocho.jpg'
    },
    {
      name: 'Chocolate Sublime',
      price: '2.00',
      image: 'assets/imagenes/sublime30g.jpg'
    },
    {
      name: 'Gaseosa 500ml. Coca-cola',
      price: '1.80',
      image: 'assets/imagenes/coca.jpg'
    }
  ];

  filteredProducts: Product[];

  constructor() {
    // Inicializar la lista de productos filtrados con todos los productos al principio
    this.filteredProducts = this.products;
  }

  // Método para manejar el cambio en el componente de búsqueda
  onSearch(event: CustomEvent) {
    const searchTerm = event.detail.value;
    if (searchTerm.trim() !== '') {
      // Filtrar productos basados en el término de búsqueda
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // Si el campo de búsqueda está vacío, mostrar todos los productos
      this.filteredProducts = this.products;
    }
  }

  addToCart(product: Product) {
    // Lógica para agregar producto al carrito
    console.log('Producto añadido al carrito:', product);
  }
}




