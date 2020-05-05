import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy, QueryList } from '@angular/core';

import { mapTo, scan, switchMap, startWith, filter, tap } from 'rxjs/operators';
import { fromEvent, interval, merge, of, Observable, Subscription } from 'rxjs';

import { IonButton } from '@ionic/angular';

import { StopwatchDirective } from '../../directives/stopwatch.directive';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnInit, AfterViewInit, OnDestroy {

  // @ViewChild('btnSearch', { static: true }) searchButtonRef: ElementRef<HTMLButtonElement>;
  // @ViewChild('searchInput', { static: true }) searchInput: QueryList<ElementRef>;

  // public query = '';
  // public isSearchInputVisible$: Observable<boolean> = of(false);

  public clock = 0;
  public pause = true;

  // @ViewChild('start', { static: true }) startBtn: ElementRef<any>;
  // @ViewChild('pause', { static: true }) pauseBtn: ElementRef;
  // @ViewChild('reset', { static: true }) resetBtn: ElementRef;

  public intervalObs$: Subscription;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    // this.isSearchInputVisible$ = merge(
    //   fromEvent(this.searchButtonRef.nativeElement, 'click')
    //     .pipe(
    //       tap(e => e.stopPropagation()),
    //       mapTo(true)),
    //   fromEvent(document.body, 'click')
    //     .pipe(
    //       filter(() => this.query === ''),
    //       mapTo(false))
    // ).pipe(startWith(false));

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

  ionViewDidLeave() {
    this.onReset();
  }

  ngOnDestroy() {
    this.onReset();
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
    if (this.intervalObs$) {
      this.intervalObs$.unsubscribe();
    }
    this.clock = 0;
  }
}
