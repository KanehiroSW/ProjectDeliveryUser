import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router
  ) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '¿Estás seguro?',
      buttons: [
        {
          text: 'Sí',
          role: 'destructive',
          handler: () => {
            this.router.navigate(['/intro']);
          }
        },
        {
          text: 'No',
        }
      ]
    });
    await actionSheet.present();
  }
}
