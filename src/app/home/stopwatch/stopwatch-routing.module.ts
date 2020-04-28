import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StopwatchPage } from './stopwatch.page';

const routes: Routes = [
  {
    path: '',
    component: StopwatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StopwatchPageRoutingModule {}
