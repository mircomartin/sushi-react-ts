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
    url: null,
    submenu: [
      {
        id: 1,
        text: 'Carta de Sushi',
        url: 'menu/sushi'
      },
      {
        id: 2,
        text: 'Carta de Vinos',
        url: 'menu/vinos'
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
    text: 'PROMOS',
    url: '#promos'
  },
  {
    id: 4,
    text: 'CONTACTO',
    url: '/contacto'
  }
]
