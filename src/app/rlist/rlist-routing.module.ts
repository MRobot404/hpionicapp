import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RlistPage } from './rlist.page';

const routes: Routes = [
  {
    path: '',
    component: RlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RlistPageRoutingModule {}
