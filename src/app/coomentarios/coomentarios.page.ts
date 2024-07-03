import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-coomentarios',
  templateUrl: './coomentarios.page.html',
  styleUrls: ['./coomentarios.page.scss'],
})
export class CoomentariosPage implements OnInit {

  rating: number = 0;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  rateProduct(star: number) {
    this.rating = star;
  }

  async submitReview() {
    const toast = await this.toastController.create({
      message: `Reseña enviada con calificación: ${this.rating} estrellas`,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();

  
  }
}
