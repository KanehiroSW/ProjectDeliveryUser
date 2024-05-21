import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { LoginService } from '../services/auth/login.service';
import { Usuario } from '../services/auth/Usuario';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit{

  user: Usuario | null = null;

  constructor(
    private loginService:LoginService,
    private actionSheetController: ActionSheetController,
    private router:Router
  ) { }

  ngOnInit() {
    this.user = this.loginService.currentUserValue;
  }

  userLoginOn:boolean=false;

  async cerrarSesion() {
    const actionSheet = await this.actionSheetController.create({
      header: '¿Estás seguro?',
      buttons: [
        {
          text: 'Sí',
          role: 'destructive',
          handler: () => {
            this.loginService.logout();
            this.router.navigate(['/']);
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
