import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/common.interface';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() public product!: IProduct;
  public selectedImage: string = '';

  public openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  public closeImage(): void {
    this.selectedImage = '';
  }
}
