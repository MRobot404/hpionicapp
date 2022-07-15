import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RlistPageRoutingModule } from './rlist-routing.module';

import { RlistPage } from './rlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RlistPageRoutingModule
  ],
  declarations: [RlistPage]
})
export class RlistPageModule {}
