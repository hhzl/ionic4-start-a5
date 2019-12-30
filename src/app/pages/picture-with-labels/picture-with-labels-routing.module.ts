import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PictureWithLabelsPage } from './picture-with-labels.page';

const routes: Routes = [
  {
    path: '',
    component: PictureWithLabelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PictureWithLabelsPageRoutingModule {}
