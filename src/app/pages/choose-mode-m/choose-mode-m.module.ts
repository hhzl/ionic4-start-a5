import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseModeMPageRoutingModule } from './choose-mode-m-routing.module';

import { ChooseModeMPage } from './choose-mode-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseModeMPageRoutingModule
  ],
  declarations: [ChooseModeMPage]
})
export class ChooseModeMPageModule {}
