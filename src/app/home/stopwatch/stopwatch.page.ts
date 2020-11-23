import { Component, OnDestroy } from '@angular/core';

import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnDestroy {

  public clock = 0;
  public pause = true;

  private _intervalObs$: Subscription;

  constructor() { }

  ionViewDidLeave() {
    this.onReset();
  }

  ngOnDestroy() {
    this.onReset();
  }

  public onToggle(pause: boolean): void {
    this.pause = pause;
    if (pause) {
      this._intervalObs$.unsubscribe();
      return;
    }
    this._intervalObs$ = interval(1000).subscribe(() => {
      this.clock++;
    });
  }

  public onReset(): void {
    this.pause = true;
    if (this._intervalObs$) {
      this._intervalObs$.unsubscribe();
    }
    this.clock = 0;
  }
}
