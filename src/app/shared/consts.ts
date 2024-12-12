import { ICommonInfoAboutCompany, IProduct } from "./interfaces/common.interface";

export const infoAboutCompany: ICommonInfoAboutCompany[] = [
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

export const products: IProduct[] = [
      {
        name: 'Мясная Делюкс',
        image: 'assets/images/pizzas/meat-deluxe.png',
        description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      },
      {
        name: 'Морская Премиум',
        image: 'assets/images/pizzas/marine-premium.png',
        description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      },
      {
        name: 'Бекон и Сосиски',
        image: 'assets/images/pizzas/bacon-and-sausages.png',
        description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      },
      {
        name: 'Куриная Делюкс',
        image: 'assets/images/pizzas/chicken-deluxe.png',
        description: 'Курица, ананас, соус для пиццы',
      },
      {
        name: 'Барбекю Премиум',
        image: 'assets/images/pizzas/bbq-premium.png',
        description: 'Свинина, BBQ-соус, соус для пиццы, соус чили',
      },
      {
        name: 'Пепперони Дабл',
        image: 'assets/images/pizzas/pepperoni-double.png',
        description: 'Пепперони, сыр, колбаса 2 видов, обжаренная и варенная',
      },
      {
        name: 'Куриное трио',
        image: 'assets/images/pizzas/chicken-trio.png',
        description: 'Жареная курица, курица, куриные наггетсы, перец, соус для пиццы',
      },
      {
        name: 'Сырная',
        image: 'assets/images/pizzas/cheese.png',
        description: 'Сыр Джорджио, сыр с плесенью, сыр Моцарелла, сыр секретный',
      },
    ];