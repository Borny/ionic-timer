import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Insomnia } from '@ionic-native/insomnia/ngx';

import { TimerPageRoutingModule } from './timer-routing.module';

import { TimerPage } from './timer.page';
import { SharedModule } from '../../shared/shared.module';

import { TimerCreateComponent } from '../../shared/components/timer-create/timer-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerPageRoutingModule,
    SharedModule,
  ],
  providers: [
    Insomnia
  ],
  declarations: [TimerPage],
  entryComponents: [TimerCreateComponent]
})
export class TimerPageModule { }
