import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HlistPageRoutingModule } from './hlist-routing.module';

import { HlistPage } from './hlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlistPageRoutingModule
  ],
  declarations: [HlistPage]
})
export class HlistPageModule {}
