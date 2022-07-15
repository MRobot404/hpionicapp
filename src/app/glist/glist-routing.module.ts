import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlistPage } from './glist.page';

const routes: Routes = [
  {
    path: '',
    component: GlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlistPageRoutingModule {}
