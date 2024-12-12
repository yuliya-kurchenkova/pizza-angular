import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ICommonInfoAboutCompany, IFormOrder } from '../../shared/interfaces/common.interface';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { ButtonComponent } from "../../core/components/button/button.component";
import { InputComponent } from "../../core/components/input/input.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PopupComponent } from '../../core/components/popup/popup.component';
import { infoAboutCompany } from '../../shared/consts';
import { ProductCardComponent } from "../../core/components/product-card/product-card.component";
import { ProductService } from '../../shared/services/product/product.service';

@Component({
  selector: 'app-landing-page',
  imports: [
    UpperCasePipe, 
    ButtonComponent, 
    InputComponent, 
    ReactiveFormsModule, 
    PopupComponent, 
    ProductCardComponent,
    AsyncPipe
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  public showSuccessPopup: boolean = false;
  public infoAboutCompany: ICommonInfoAboutCompany[] = infoAboutCompany;
  public productService = inject(ProductService);
  public products$ = this.productService.getProducts();

  public form: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    address: new FormControl<string>('', Validators.required),
    phone: new FormControl<string>('', Validators.required),
  })

  public getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }
  
  public onSubmit(): void {
    if (this.form.valid) {
      this.mockRequest(this.form.getRawValue())
      .then(() => {
        this.showSuccessPopup = true;
        this.form.reset();
      });
    }
  }

  public closePopup() {
    this.showSuccessPopup = false;
  }

  private mockRequest(body: IFormOrder): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }

}
