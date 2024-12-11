import { Component } from '@angular/core';
import { ICommonInfoAboutCompany } from '../../shared/interfaces/common.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [UpperCasePipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
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

}
