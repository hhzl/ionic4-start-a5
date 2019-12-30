import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PictureWithLabelsPageRoutingModule } from './picture-with-labels-routing.module';

import { PictureWithLabelsPage } from './picture-with-labels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PictureWithLabelsPageRoutingModule
  ],
  declarations: [PictureWithLabelsPage]
})
export class PictureWithLabelsPageModule {}
