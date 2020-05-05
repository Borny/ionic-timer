import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-create',
  templateUrl: './timer-create.component.html',
  styleUrls: ['./timer-create.component.scss'],
})
export class TimerCreateComponent implements OnInit {

  @ViewChild('createTimerForm', { static: false }) createTimerFormRef: NgForm;
  public roundsNumber = 1;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  onCreateTimer(form: NgForm) {
    const timer = (this.createTimerFormRef.value.minutes * 60) + this.createTimerFormRef.value.seconds;
    this.modalCtrl.dismiss(
      {
        timer,
        rounds: this.createTimerFormRef.value.rounds
      },
      'confirm',
      'createTimer');
  }

  onRemoveRound() {
    this.roundsNumber--;
  }

  onAddRound() {
    this.roundsNumber++;
  }
}
