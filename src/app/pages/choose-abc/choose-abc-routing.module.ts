import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseAbcPage } from './choose-abc.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseAbcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseAbcPageRoutingModule {}
