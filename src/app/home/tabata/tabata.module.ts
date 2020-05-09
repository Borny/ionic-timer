import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabataPageRoutingModule } from './tabata-routing.module';

import { TabataPage } from './tabata.page';
import { SharedModule } from '../../shared/shared.module';
import { TabataCreateComponent } from '../../shared/components/tabata-create/tabata-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabataPageRoutingModule,
    SharedModule
  ],
  declarations: [TabataPage],
  entryComponents: [TabataCreateComponent]
})
export class TabataPageModule { }
