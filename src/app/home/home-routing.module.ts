import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'stopwatch',
        loadChildren: () => import('./stopwatch/stopwatch.module').then(m => m.StopwatchPageModule)
      },
      {
        path: 'timer',
        loadChildren: () => import('./timer/timer.module').then(m => m.TimerPageModule)
      },
      {
        path: 'tabata',
        loadChildren: () => import('./tabata/tabata.module').then(m => m.TabataPageModule)
      },
      {
        path: '',
        redirectTo: 'home/stopwatch',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
