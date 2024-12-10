import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public menuItems = [
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
}
