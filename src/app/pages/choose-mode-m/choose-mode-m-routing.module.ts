import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseModeMPage } from './choose-mode-m.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseModeMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseModeMPageRoutingModule {}
