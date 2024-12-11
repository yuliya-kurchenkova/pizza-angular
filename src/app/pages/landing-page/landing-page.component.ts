import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICommonInfoAboutCompany, IFormOrder } from '../../shared/interfaces/common.interface';
import { UpperCasePipe } from '@angular/common';
import { ButtonComponent } from "../../core/components/button/button.component";
import { InputComponent } from "../../core/components/input/input.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PopupComponent } from '../../core/components/popup/popup.component';

@Component({
  selector: 'app-landing-page',
  imports: [UpperCasePipe, ButtonComponent, InputComponent, ReactiveFormsModule, PopupComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  public infoAboutCompany: ICommonInfoAboutCompany[] = [
    {
      imageUrl: 'assets/images/main/icons/hop.png',
      title: 'Лучшее тесто',
      description: 'Мы создаем тесто только из отборной итальянской муки наивысшего качества'
    },
    {
      imageUrl: 'assets/images/main/icons/kitchen-pack.png',
      title: 'Лучшие повара',
      description: 'Пиццы готовят самые профессиональные итальянские повара'
    },
    {
      imageUrl: 'assets/images/main/icons/seo-and-web.png',
      title: 'Гарантия качества',
      description: 'Наша пиццерия получила множество наград и признаний по всему миру'
    },
    {
      imageUrl: 'assets/images/main/icons/holidays.png',
      title: 'Отборные рецепты',
      description: 'Мы используем рецепты от мировых лидеров в приготовлении пиццы'
    }
  ];

  public showSuccessPopup: boolean = false;

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
