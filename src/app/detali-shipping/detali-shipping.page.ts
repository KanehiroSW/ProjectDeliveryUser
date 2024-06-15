import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PedidoService } from '../services/usuario/pedido.service';
import { LoginService } from '../services/auth/login.service';
import { CartService } from '../services/usuario/cart.service';

@Component({
  selector: 'app-detali-shipping',
  templateUrl: './detali-shipping.page.html',
  styleUrls: ['./detali-shipping.page.scss'],
})
export class DetaliShippingPage implements OnInit {

  fotoTomada: string | undefined;
  piso: string | undefined;
  pabellon: string | undefined;
  aula: string | undefined;

  constructor(
    private pedidoService: PedidoService,
    private cartService: CartService,
    private loginService: LoginService,
    // private storeService: StoreService
  ) {}

  ngOnInit() {}

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });

    this.fotoTomada = 'data:image/jpeg;base64,' + image.base64String;
  }

  confirmarPedido() {
    // const usuario = this.loginService.currentUserValue;
    // const tienda = this.storeService.currentStoreValue;

    // if (!usuario || !tienda) {
    //   alert('Error: Usuario o tienda no seleccionados');
    //   return;
    // }

    // const pedido: Pedido = {
    //   numeroSerie: this.pedidoService.generarNumeroSerie(),
    //   direccionEntrega: `Piso: ${this.piso}, Pabellón: ${this.pabellon}, Aula: ${this.aula}`,
    //   fechaPedido: new Date(),
    //   usuario: usuario,
    //   tienda: tienda,
    //   detallePedidos: this.cartService.getCartItems(),
    //   totalPedido: this.cartService.calculateTotal(),
    //   estadoPedido: 'PENDIENTE'
    // };

    // this.pedidoService.savePedido(pedido).subscribe(() => {
    //   alert('Tu orden ha sido enviada');
    //   this.cartService.clearCart();
    //   // Redirigir a la página principal o a la página de confirmación
    // });
  }
}
