import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopwatchPageRoutingModule } from './stopwatch-routing.module';

import { StopwatchPage } from './stopwatch.page';
import { StopwatchDirective } from '../../directives/stopwatch.directive';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopwatchPageRoutingModule,
  ],
  declarations: [StopwatchPage, TimeFormatPipe],
  providers: []
})
export class StopwatchPageModule { }
