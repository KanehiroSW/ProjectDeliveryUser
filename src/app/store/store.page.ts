import { Component, OnInit } from '@angular/core';
import { Producto } from '../services/usuario/Producto';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../services/usuario/pedido.service';
import { ProductoService } from '../services/usuario/producto.service';
import { CartService } from '../services/usuario/cart.service';
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
export class StorePage implements OnInit {

  products: Producto[] = [];
  idTienda!: number;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const idTiendaParam = this.route.snapshot.paramMap.get('idTienda');
    this.idTienda = idTiendaParam ? parseInt(idTiendaParam, 10) : 0;
    this.loadProducts();
  }
  
  loadProducts() {
    this.productoService.listProductos(this.idTienda).subscribe((products) => {
      this.products = products;
    });
  }

  onSearch(event: CustomEvent) {
    const searchTerm = event.detail.value;
    if (searchTerm.trim() !== '') {
      this.products = this.products.filter((product) =>
        product.nombreProducto.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.loadProducts();
    }
  }

  addToCart(producto: Producto) {
    if (producto.quantity && producto.quantity > 0) {
      // Guarda la cantidad antes de restablecerla
      const cantidad = producto.quantity;

      // Agrega el producto al carrito con la cantidad especificada
      this.cartService.addProduct({ ...producto, quantity: cantidad });
      alert('Producto agregado al carrito');

      // Restablece la cantidad a 1
      producto.quantity = 1;
    } else {
      alert('Por favor, ingrese una cantidad válida');
    }
  }
}