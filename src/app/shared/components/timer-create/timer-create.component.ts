import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './timer-create.component.html',
  styleUrls: ['./timer-create.component.scss'],
})
export class TimerCreateComponent {

  @ViewChild('createTimerForm', { static: false }) createTimerFormRef: NgForm;
  public roundsNumber = 1;
  public defaultTime = '00:00:00';

  constructor(private modalCtrl: ModalController) { }

  public onDismiss(): void {
    this.modalCtrl.dismiss();
  }

  public onCreateTimer(form: NgForm): void {
    // spliting the time string
    const time = this.createTimerFormRef.value.fullTime.split(':');
    // casting from string to number and adding the minutes and seconds
    const totalSeconds = (+time[1] * 60) + +time[2];
    this.modalCtrl.dismiss(
      {
        totalSeconds,
        rounds: this.createTimerFormRef.value.rounds
      },
      'confirm',
      'createTimer');
  }

  public onRemoveRound(): void {
    this.roundsNumber--;
  }

  public onAddRound(): void {
    this.roundsNumber++;
  }
}
