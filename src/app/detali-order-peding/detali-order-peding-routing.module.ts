import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaliOrderPedingPage } from './detali-order-peding.page';

const routes: Routes = [
  {
    path: '',
    component: DetaliOrderPedingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaliOrderPedingPageRoutingModule {}
