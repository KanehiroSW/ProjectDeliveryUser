import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetaliOrderPage } from './detali-order.page';



const routes: Routes = [
  {
    path: '',
    component: DetaliOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaliOrderPageRoutingModule {}
