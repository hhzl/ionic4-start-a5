import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnModeMPage } from './learn-mode-m.page';

const routes: Routes = [
  {
    path: '',
    component: LearnModeMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnModeMPageRoutingModule {}
