import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Subscription, interval, Observable, fromEvent, timer } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { TabataCreateComponent } from '../../shared/components/tabata-create/tabata-create.component';
import { TextInfo } from '../../types/text-info.enum';
import { IntervalType } from '../../types/interval-type.enum';

@Component({
  selector: 'app-tabata',
  templateUrl: './tabata.page.html',
  styleUrls: ['./tabata.page.scss'],
})
export class TabataPage implements OnInit, OnDestroy {

  public round = 1;
  public clock = 10;
  public timeElapsed = 0;
  public pause = true;
  public textInfo: TextInfo;

  public isBlocked = false;
  public initialRounds = 8;
  public isDone = false;

  public intervalType: IntervalType;
  public intervalTypeTextColor = 'warning-color';

  public intervalObs$: Subscription;

  private _initialClock = this.clock;
  private _audio: HTMLAudioElement;

  private readonly TAP_SOUND = '../../assets/sounds/button-50.mp3';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this._audio = new Audio(this.TAP_SOUND);
    this.textInfo = TextInfo.getReady;
    this.intervalType = IntervalType.getReady;
  }

  ionViewDidLeave() {
    this.onReset();
  }

  ngOnDestroy() {
    this.onReset();
  }

  public onCreateTabata() {
    this.onReset();
    this.modalCtrl.create({
      keyboardClose: true,
      component: TabataCreateComponent,
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
          this.timeElapsed++;
          // Play beeping sound
          if (this.clock >= 1 && this.clock <= 3) {
            this._playSound();
          }

          // Update round
          if (this.clock < 1 && this.intervalType === IntervalType.rest) {
            this._roundsCount();
          }

          // Switch interval type
          if (
            (this.intervalType === IntervalType.getReady
              || this.intervalType === IntervalType.rest)
            && this.clock < 1
          ) {
            this.textInfo = TextInfo.work;
            this.intervalType = IntervalType.work;
            this.clock = 20;
            this.intervalTypeTextColor = 'primary-color';
          } else if (
            this.intervalType === IntervalType.work
            && this.clock < 1
          ) {
            this.textInfo = TextInfo.rest;
            this.intervalType = IntervalType.rest;
            this.clock = 10;
            this.intervalTypeTextColor = 'success-color';
          }
          console.log(this.clock);
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
    this.round = 1;
    this.timeElapsed = 0;
    this.intervalType = IntervalType.getReady;
    this.textInfo = TextInfo.getReady;
    this.intervalTypeTextColor = 'warning-color';
  }

  ////////////
  // PRIVATE
  ////////////

  private _playSound() {
    this._audio.play();
  }

  private _roundsCount() {
    if (this.round < this.initialRounds) {
      this.round++;
    } else {
      this.intervalObs$.unsubscribe();
      this.textInfo = TextInfo.done;
      this.pause = true;
      this.isBlocked = true;
    }
  }

}
