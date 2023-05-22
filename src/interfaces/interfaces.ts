export interface INav {
  id: number
  url: string
  text: string
  submenu?: Submenu[]
}

interface Submenu {
  id: number
  url: string
  text: string
}

export interface ISlide {
  id: number 
  title: string 
  textButton: string 
  urlSlide: string 
  srcImg: string
}

export interface IMediaText {
  id: number
  title: string
  description: string
  srcImg: string
  videoId: string
}

export interface ITestimonial {
  id: number
  author: string
  comment: string
}

export interface ICard {
  id: number
  title: string
  description: string
  price: string
  image: string
}

export interface IStaticPage {
  id: number | string
  title: string
  description: string
  image: string
  subtitle: string
}
