import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaliOrderPedingPageRoutingModule } from './detali-order-peding-routing.module';

import { DetaliOrderPedingPage } from './detali-order-peding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaliOrderPedingPageRoutingModule
  ],
  declarations: [DetaliOrderPedingPage]
})
export class DetaliOrderPedingPageModule {}
