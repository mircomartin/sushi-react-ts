export interface INav {
  id: number
  url?: string
  text: string
  submenu?: Submenu[] | []
}

interface Submenu {
  id: number
  url: string
  text: string
}

export interface ISlide {
  id: number 
  title: string | null 
  textButton: string | null 
  urlSlide: string | null 
  srcImg: string
}

export interface IMediaText {
  id: number
  title: string
  description: string
  srcImg: string
  videoId?: string
}

export interface ITestimonial {
  id: number
  author: string
  comment: string
}

export interface IPromo {
  id: number
  title: string
  description: string
  price: string | null
  image: string
}
