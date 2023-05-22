import { type INav } from '../interfaces/interfaces'

export const nav: INav[] = [
  {
    id: 0,
    text: 'Inicio',
    url: '/'
  },
  {
    id: 1,
    text: 'MENÚ',
    url: '#',
    submenu: [
      {
        id: 1,
        text: 'Carta de Sushi',
        url: '/menu/sushi'
      },
      {
        id: 2,
        text: 'Carta de Vinos',
        url: '/menu/vinos'
      }
    ]
  },
  {
    id: 2,
    text: 'Sobre Nosotros',
    url: '/sobre-nosotros'
  },
  {
    id: 3,
    text: 'Cartas',
    url: '#',
    submenu: [
      {
        id: 1,
        text: 'Restaurant',
        url: 'https://madame-butterfly-sushi.000webhostapp.com/wp-content/uploads/2023/05/menu-restaurant-b.pdf'
      },
      {
        id: 2,
        text: 'Take away',
        url: 'https://madame-butterfly-sushi.000webhostapp.com/wp-content/uploads/2023/05/carta-vegan-take-away.pdf'
      },
      {
        id: 3,
        text: 'Vegan',
        url: 'https://madame-butterfly-sushi.000webhostapp.com/wp-content/uploads/2023/05/carta-vegan-take-away.pdf'
      },
      {
        id: 4,
        text: 'Vinos',
        url: 'https://madame-butterfly-sushi.000webhostapp.com/wp-content/uploads/2023/05/madame-vinos-sushin.pdf'
      }
    ]
  },
  {
    id: 4,
    text: 'CONTACTO',
    url: '/contacto'
  }
]
