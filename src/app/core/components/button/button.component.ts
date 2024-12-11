import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() public label: string = '';
  @Input() public type: 'button' | 'submit' | 'reset' = 'button';
  @Input() public isDisabled: boolean = false;
  @Output() public click = new EventEmitter<void>();

  public onClick(): void {
    this.click.emit();
  }
}
