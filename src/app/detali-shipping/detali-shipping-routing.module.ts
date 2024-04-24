import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaliShippingPage } from './detali-shipping.page';

const routes: Routes = [
  {
    path: '',
    component: DetaliShippingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaliShippingPageRoutingModule {}
