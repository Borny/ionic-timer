import { Component, OnDestroy } from '@angular/core';

import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnDestroy {
  public clock = 0;
  public pause = true;
  public start = true;
  public radius = 100;
  public subtitle: string;
  public percent = 100;

  public readonly PRIMARY_COLOR = '#428cff';
  public readonly SECONDARY_COLOR = '#50c8ff';
  public readonly DANGER_COLOR = '#ff4961';

  private readonly START = 'Start';
  private readonly PAUSED = 'Paused';
  private readonly ON = 'On';

  private _intervalObs$: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.getSubtitle();
  }

  ionViewDidLeave() {
    this.onReset();
  }

  ngOnDestroy() {
    this.onReset();
  }

  public onToggle(): void {
    this.pause = !this.pause;
    this.start = false;
    this.getSubtitle();
    if (this.pause && this._intervalObs$) {
      this._intervalObs$.unsubscribe();
      return;
    }
    this._intervalObs$ = interval(1000)
      .pipe(
        tap(() => {
          this.clock++;
          console.log();
        })
      )
      .subscribe();
  }

  public onReset(): void {
    this.pause = true;
    this.start = true;
    this.getSubtitle();
    if (this._intervalObs$) {
      this._intervalObs$.unsubscribe();
    }
    this.clock = 0;
  }

  public getSubtitle(): string {
    if (this.start) {
      return (this.subtitle = this.START);
    } else if (this.pause && !this.start) {
      return (this.subtitle = this.PAUSED);
    } else {
      return (this.subtitle = this.ON);
    }
  }
}
