import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-detali-shipping',
  templateUrl: './detali-shipping.page.html',
  styleUrls: ['./detali-shipping.page.scss'],
})
export class DetaliShippingPage implements OnInit {
  
  fotoTomada: string | undefined;

  constructor() { }

  ngOnInit() {
  }
  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    this.fotoTomada = 'data:image/jpeg;base64,' + image.base64String;
  }
}
