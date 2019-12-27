import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnModeMPageRoutingModule } from './learn-mode-m-routing.module';

import { LearnModeMPage } from './learn-mode-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnModeMPageRoutingModule
  ],
  declarations: [LearnModeMPage]
})
export class LearnModeMPageModule {}
