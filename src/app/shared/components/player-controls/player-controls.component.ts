import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'player-controls',
  templateUrl: './player-controls.component.html',
})
export class PlayerControlsComponent {
  @Input() isBlocked: boolean;
  @Input() pause: boolean;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  public onToggle(): void {
    this.toggle.emit(!this.pause);
  }

  public onReset(): void {
    this.reset.emit();
  }
}
