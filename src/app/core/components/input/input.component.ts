import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() public type: 'text' | 'tel' = 'text';
  @Input() public placeholder: string = '';
  @Input() public control: FormControl = new FormControl();
  @Input() public mask: string = '';
  
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filteredValue = this.filterInput(inputElement.value);
    inputElement.value = filteredValue;
    this.control.setValue(filteredValue, { emitEvent: false });
  }

  private filterInput(value: string): string {
    if (this.type === 'text') {
      return value.replace(/\./g, '');
    }
    return value;
  }
}
