import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent {
  @Input() public visible: boolean = false;
  @Input() public title: string = '';
  @Output() public closePopup = new EventEmitter<void>();

  public close(): void {
    this.closePopup.emit();
  }
}
