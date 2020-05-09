import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'player-controls',
  templateUrl: './player-controls.component.html'
})
export class PlayerControlsComponent {
  @Input() isBlocked: boolean;
  @Input() pause: boolean;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  onToggle(value: boolean) {
    this.toggle.emit(value);
  }

  onReset() {
    this.reset.emit();
  }

}
