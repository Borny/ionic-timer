import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  pure: true
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value < 0) {
      value = 0;
    }
    const hours = Math.floor((value / 60) / 60);
    const minutes = Math.floor((value / 60) % 60);
    const seconds = value % 60;
    if (hours === 0) {
      return `${this._padding(minutes)}${minutes}:${this._padding(seconds)}${seconds}`
    }
    return `${this._padding(hours)}${hours}:${this._padding(minutes)}${minutes}:${this._padding(seconds)}${seconds}`
  }

  private _padding(time: number) {
    return time < 10 ? '0' : '';
  }
}
