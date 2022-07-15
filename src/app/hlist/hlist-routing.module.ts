import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlistPage } from './hlist.page';

const routes: Routes = [
  {
    path: '',
    component: HlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlistPageRoutingModule {}
