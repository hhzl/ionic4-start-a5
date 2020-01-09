import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseAbcPageRoutingModule } from './choose-abc-routing.module';

import { ChooseAbcPage } from './choose-abc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseAbcPageRoutingModule
  ],
  declarations: [ChooseAbcPage]
})
export class ChooseAbcPageModule {}
