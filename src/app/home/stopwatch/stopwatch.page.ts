import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { mapTo, scan, switchMap } from 'rxjs/operators';
import { fromEvent, interval, merge, of, Observable, Subscription } from 'rxjs';

import { StopwatchDirective } from '../../directives/stopwatch.directive';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnInit, AfterViewInit, OnDestroy {

  clock: number = 0;
  pause = true;

  // @ViewChild('start', { static: true }) startBtn: ElementRef;
  // @ViewChild('pause', { static: true }) pauseBtn: ElementRef;
  // @ViewChild('reset', { static: true }) resetBtn: ElementRef;

  public intervalObs$: Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // const start$ = fromEvent(this.startBtn.nativeElement, 'click').pipe(mapTo(true));

    // this.intervalObs$ = merge(start$).pipe(
    //   switchMap(() =>
    //     interval(1000)
    //   ),
    //   scan((accumulatedValue, currentValue) => {
    //     // if (accumulatedValue === 0) { return accumulatedValue; }
    //     // if (currentValue === null || !accumulatedValue) { return this.d.getTotalSeconds(); }
    //     return ++accumulatedValue;
    //   })
    // );
  }

  ngOnDestroy() {
    this.intervalObs$.unsubscribe();
  }

  onToggle(pause: boolean) {
    this.pause = pause;
    if (pause) {
      this.intervalObs$.unsubscribe();
      return;
    }
    this.intervalObs$ = interval(1000).subscribe(() => {
      this.clock++;
    });
  }

  onReset() {
    this.pause = true;
    this.intervalObs$.unsubscribe();
    this.clock = 0;
  }
}
