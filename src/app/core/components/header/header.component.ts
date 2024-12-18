import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IMenuHeader } from '../../../shared/interfaces/common.interface';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public menuItems: IMenuHeader[] = [
    {
      label: 'Пиццы',
      link: '/pizzas'
    },
    {
      label: 'Напитки',
      link: '/drinks'
    },
    {
      label: 'Доставка и оплата',
      link: '/delivery'
    },
    {
      label: 'Контакты',
      link: '/contacts'
    },
  ]

  public isMobileMenuOpen: boolean = false;

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
