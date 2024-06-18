import { Component, OnInit } from '@angular/core';
import { Producto } from '../services/usuario/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/usuario/producto.service';
import { CartService } from '../services/usuario/cart.service';

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
    private cartService: CartService,
    private router: Router
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
      const cantidad = producto.quantity;
      this.cartService.addProduct({ ...producto, quantity: cantidad });
      alert('Producto agregado al carrito');
      producto.quantity = 1;
    } else {
      alert('Por favor, ingrese una cantidad válida');
    }
  }

  goHome() {
    this.router.navigate(['/tabs/tab1']);
    this.cartService.clearCart();
  }
}