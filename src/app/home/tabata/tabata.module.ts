import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabataPageRoutingModule } from './tabata-routing.module';

import { TabataPage } from './tabata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabataPageRoutingModule
  ],
  declarations: [TabataPage]
})
export class TabataPageModule {}
