import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Insomnia } from '@ionic-native/insomnia/ngx';

import { Subscription, interval } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TimerCreateComponent } from '../../shared/components/timer-create/timer-create.component';

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
  public radius = 100;
  public percent = 0;
  public progress = 1;
  public start = true;

  public intervalObs$: Subscription;

  public readonly PRIMARY_COLOR = '#428cff';
  public readonly SECONDARY_COLOR = '#50c8ff';
  public readonly DANGER_COLOR = '#ff4961';

  private _initialClock = this.clock;
  private _audio: HTMLAudioElement;

  private readonly TAP_SOUND = './assets/sounds/button-50.mp3';
  private readonly START = 'Start';
  private readonly PAUSED = 'Paused';
  private readonly ON = 'On';

  constructor(private insomnia: Insomnia, private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this._audio = new Audio(this.TAP_SOUND);
    console.log(this.TAP_SOUND);
  }

  ionViewDidLeave(): void {
    this.onReset();
  }

  ngOnDestroy(): void {
    this.onReset();
  }

  public onCreateTimer(): void {
    this.onReset();
    this.modalCtrl
      .create({
        keyboardClose: true,
        component: TimerCreateComponent,
        id: 'createTimer',
      })
      .then(async (modalEl) => {
        modalEl.present();
        this.pause = true;
        const { data } = await modalEl.onWillDismiss();
        if (data) {
          if (data.totalSeconds !== 0) {
            this._initialClock = data.totalSeconds;
            this.clock = data.totalSeconds;
          }
          this.initialRounds = data.rounds;
        }
      });
  }

  public onToggle(pause?: boolean): void {
    this.pause = !this.pause;
    this.start = false;
    if (this.pause && this.intervalObs$) {
      this.intervalObs$.unsubscribe();
      return;
    }

    this.intervalObs$ = interval(1000)
      .pipe(
        tap(() => {
          this.percent = Math.floor((this.progress / this._initialClock) * 100);
          this.progress++;
          this.clock--;
          if (this.clock >= 1 && this.clock <= 3) {
            this._playSound();
          }
          if (this.clock < 0 && this.initialRounds > 1) {
            this._roundsCount();
          } else if (this.clock < 0) {
            this.pause = true;
            this.isBlocked = true;
            this.intervalObs$.unsubscribe();
          }
          this.insomnia.keepAwake();
        })
      )
      .subscribe(() => {});
  }

  public onReset() {
    if (this.intervalObs$) {
      this.intervalObs$.unsubscribe();
    }
    this.start = true;
    this.pause = true;
    this.isBlocked = false;
    this.clock = this._initialClock;
    this.rounds = 1;
    this.percent = 0;
    this.progress = 1;
    this.insomnia.allowSleepAgain();
  }

  public getSubtitle(): string {
    if (this.start) {
      return this.START;
    } else if (this.pause) {
      return this.PAUSED;
    } else {
      return this.ON;
    }
  }

  ////////////
  // PRIVATE
  ////////////

  private _playSound() {
    this._audio.play();
  }

  private _roundsCount() {
    this.progress = 1;
    this.percent = 0;
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
