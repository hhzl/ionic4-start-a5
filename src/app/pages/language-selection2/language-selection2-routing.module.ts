import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageSelection2Page } from './language-selection2.page';

const routes: Routes = [
  {
    path: '',
    component: LanguageSelection2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageSelection2PageRoutingModule {}
