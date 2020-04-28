import { Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from '../models/state.model';

@Directive({
  selector: '[appStopwatch]'
})
export class StopwatchDirective {

  private state = new BehaviorSubject<State>({
    seconds: 0,
    minutes: 0,
    hours: 0,
    totalTime: 0
  });

  public stateObservable$ = this.state.asObservable();

  updateState(value: string, command: string) {
    let valToNumber = parseInt(value);
    if (valToNumber < 0) { valToNumber = 0; }
    const update = this.state.value;
    if (command === 'seconds') { update.seconds = valToNumber; }
    if (command === 'minutes') { update.minutes = valToNumber; }
    if (command === 'hours') { update.hours = valToNumber; }
    update.totalTime = this.calculateInSeconds(update);
    this.state.next(update);
  }

  calculateInSeconds(update: State) {
    let totalTime = update.seconds;
    totalTime += update.minutes * 60;
    totalTime += (update.hours * 60) * 60;
    return totalTime;
  }

  constructor() { }

  getSeconds() {
    return this.state.value.seconds;
  }
  getMinutes() {
    return this.state.value.minutes;
  }
  getHours() {
    return this.state.value.hours;
  }
  getTotalSeconds() {
    return this.state.value.totalTime;
  }

}
