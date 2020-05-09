import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  templateUrl: './tabata-create.component.html'
})
export class TabataCreateComponent {

  constructor(private modalCtrl: ModalController) { }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

}
