import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguageSelection2PageRoutingModule } from './language-selection2-routing.module';

import { LanguageSelection2Page } from './language-selection2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguageSelection2PageRoutingModule
  ],
  declarations: [LanguageSelection2Page]
})
export class LanguageSelection2PageModule {}
