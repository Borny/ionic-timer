import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeFormatPipe } from '../pipes/time-format.pipe';

import { TimerCreateComponent } from './components/timer-create/timer-create.component';
import { TabataCreateComponent } from './components/tabata-create/tabata-create.component';
import { PlayerControlsComponent } from './components/player-controls/player-controls.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    TimerCreateComponent,
    TabataCreateComponent,
    TimeFormatPipe,
    PlayerControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCircleProgressModule.forRoot({
    })
  ],
  exports: [TimerCreateComponent, PlayerControlsComponent, TimeFormatPipe, NgCircleProgressModule],
  providers: [],
})
export class SharedModule { }
