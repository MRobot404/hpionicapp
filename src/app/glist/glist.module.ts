import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlistPageRoutingModule } from './glist-routing.module';

import { GlistPage } from './glist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlistPageRoutingModule
  ],
  declarations: [GlistPage]
})
export class GlistPageModule {}
