import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopwatchPageRoutingModule } from './stopwatch-routing.module';

import { StopwatchPage } from './stopwatch.page';
import { StopwatchDirective } from '../../directives/stopwatch.directive';
// import { FocusDirective } from '../../directives/input-focus.directive';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopwatchPageRoutingModule,
    SharedModule
  ],
  declarations: [StopwatchPage],
  providers: []
})
export class StopwatchPageModule { }
