import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaliOrderPageRoutingModule } from './detali-order-routing.module';

import { DetaliOrderPage } from './detali-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaliOrderPageRoutingModule
  ],
  declarations: [DetaliOrderPage]
})
export class DetaliOrderPageModule {}
