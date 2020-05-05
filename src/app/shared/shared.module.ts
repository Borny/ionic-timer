import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeFormatPipe } from '../pipes/time-format.pipe';

import { TimerCreateComponent } from './timer-create/timer-create.component';

@NgModule({
  declarations: [
    TimerCreateComponent,
    TimeFormatPipe
  ],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [TimerCreateComponent, TimeFormatPipe],
  providers: [],
})
export class SharedModule { }
