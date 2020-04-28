import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabataPage } from './tabata.page';

const routes: Routes = [
  {
    path: '',
    component: TabataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabataPageRoutingModule {}
