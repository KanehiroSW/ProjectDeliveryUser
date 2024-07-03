import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoomentariosPageRoutingModule } from './coomentarios-routing.module';

import { CoomentariosPage } from './coomentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoomentariosPageRoutingModule
  ],
  declarations: [CoomentariosPage]
})
export class CoomentariosPageModule {}
