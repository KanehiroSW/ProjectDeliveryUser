import { Component, OnInit } from '@angular/core';
import { Producto } from '../services/usuario/Producto';
import { UsuarioService } from '../services/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idTiendaParam = this.route.snapshot.paramMap.get('idTienda');
    this.idTienda = idTiendaParam ? parseInt(idTiendaParam, 10) : 0;
    this.loadProducts();
  }

  loadProducts() {
    this.usuarioService.listProductos(this.idTienda).subscribe(products => {
      this.products = products;
    });
  }

  onSearch(event: CustomEvent) {
    const searchTerm = event.detail.value;
    if (searchTerm.trim() !== '') {
      this.products = this.products.filter(product =>
        product.nombreProducto.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.loadProducts();
    }
  }
}