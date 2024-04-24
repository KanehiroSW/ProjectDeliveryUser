import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaliShippingPageRoutingModule } from './detali-shipping-routing.module';

import { DetaliShippingPage } from './detali-shipping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaliShippingPageRoutingModule
  ],
  declarations: [DetaliShippingPage]
})
export class DetaliShippingPageModule {}
