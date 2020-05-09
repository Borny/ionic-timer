import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Subscription, interval, Observable, fromEvent, timer } from 'rxjs';

import { TimerCreateComponent } from '../../shared/timer-create/timer-create.component';
import { tap, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit, OnDestroy {

  public rounds = 1;
  public clock = 70;
  public pause = true;
  public isBlocked = false;
  public initialRounds = this.rounds;
  public isDone = false;

  public intervalObs$: Subscription;

  private _initialClock = this.clock;
  private _audio: HTMLAudioElement;

  private readonly TAP_SOUND = '../../assets/sounds/button-50.mp3';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this._audio = new Audio(this.TAP_SOUND);
  }

  ionViewDidLeave() {
    this.onReset();
  }

  ngOnDestroy() {
    this.onReset();
  }

  public onCreateTimer() {
    this.onReset();
    this.modalCtrl.create({
      keyboardClose: true,
      component: TimerCreateComponent,
      id: 'createTimer'
    }).then(
      async modalEl => {
        modalEl.present();
        this.pause = true;
        const { data } = await modalEl.onWillDismiss();
        if (data) {
          console.log('data: ', data);
          this._initialClock = data.timer;
          this.initialRounds = data.rounds;
          this.clock = data.timer;
        }
      }
    );
  }

  public onToggle(pause: boolean) {
    this.pause = pause;
    if (pause) {
      this.intervalObs$.unsubscribe();
      return;
    }
    this.intervalObs$ = interval(1000)
      .pipe(
        tap(() => {
          this.clock--;
          if (this.clock >= 1 && this.clock <= 3) {
            this._playSound();
          }
          console.log(this.clock);
          if (this.clock < 0 && this.initialRounds > 1) {
            this._roundsCount();
          } else if (this.clock < 0) {
            this.pause = true;
            this.isBlocked = true;
            this.intervalObs$.unsubscribe();
          }
        })
      )
      .subscribe(() => {
      });
  }

  public onReset() {
    if (this.intervalObs$) {
      this.intervalObs$.unsubscribe();
    }
    this.pause = true;
    this.isBlocked = false;
    this.clock = this._initialClock;
    this.rounds = 1;
  }

  ////////////
  // PRIVATE
  ////////////

  private _playSound() {
    this._audio.play();
  }

  private _roundsCount() {
    if (this.rounds < this.initialRounds) {
      this.clock = this._initialClock;
      this.rounds++;
    } else {
      this.intervalObs$.unsubscribe();
      this.pause = true;
      this.isBlocked = true;
    }
  }

}
