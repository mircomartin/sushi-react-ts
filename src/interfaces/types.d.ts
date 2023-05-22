export interface PromoAPI {
  id: number
  attributes: {
    title: string
    description: string
    price: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: string | null
          caption: string | null
          width: number
          height: number
          formats: {
            thumbnail: {
              ext: string
              url: string
              hash: string
              mime: string
              name: string
              path: string | null
              size: number
              width: number
              height: number
              provider_metadata: {
                public_id: string
                resource_type: string
              }
            }
          }
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: string | null
          provider: string
          provider_metadata: {
            public_id: string
            resource_type: string
          }
          createdAt: string
          updatedAt: string
        }
      }
    }
  }
}

export interface SlideAPI {
  id: number
  attributes: {
    title: string | null
    textButton: string | null
    urlSlide: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
    imageSlide: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: string | null
          caption: string | null
          width: number
          height: number
          formats: {
            thumbnail: {
              ext: string
              url: string
              hash: string
              mime: string
              name: string
              path: string | null
              size: number
              width: number
              height: number
              provider_metadata: {
                public_id: string
                resource_type: string
              }
            }
          }
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: string | null
          provider: string
          provider_metadata: {
            public_id: string
            resource_type: string
          }
          createdAt: string
          updatedAt: string
        }
      }
    }
  }
}

export interface TestimonialsAPI {
  id: number
  attributes: {
    comment: string
    author: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface WP_Slider {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  featured_media: number
  template: string
  acf: {
    image: string
    title: string
    textButton: string
    urlSlide: string
  }
  yoast_head: string
}

export interface WP_MenuDestacados {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  featured_media: number
  template: string
  acf: {
    title: string
    description: string
    price: string
    image: string
  }
  yoast_head: string
}

export interface WP_Testimonial {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  featured_media: number
  template: string
  acf: {
    author: string
    comment: string
  }
  yoast_head: string
}

export interface WP_Page {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  parent: number
  menu_order: number
  comment_status: string
  ping_status: string
  template: string
  meta: any[]
  acf: {
    imagen_destacada: string
    sub_titulo: string
  }
}

export interface WP_Post {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: 'publish'
  type: 'post'
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  comment_status: 'open' | 'closed'
  ping_status: 'open' | 'closed'
  sticky: boolean
  template: string
  format: 'standard'
  meta: any[] // Puedes definir un tipo más preciso si se conoce la estructura del objeto
  categories: number[]
  tags: any[] // Puedes definir un tipo más preciso si se conoce la estructura del objeto
  acf: {
    title: string
    description: string
    price: string
    image: string
  }
}

export interface WP_NavMenu {
  ID: number
  post_author: string
  post_date: string
  post_date_gmt: string
  post_content: string
  post_title: string
  post_excerpt: string
  post_status: 'publish'
  comment_status: 'open' | 'closed'
  ping_status: 'open' | 'closed'
  post_password: string
  post_name: string
  to_ping: string
  pinged: string
  post_modified: string
  post_modified_gmt: string
  post_content_filtered: string
  post_parent: number
  guid: string
  menu_order: number
  post_type: 'nav_menu_item'
  post_mime_type: string
  comment_count: string
  filter: 'raw'
  db_id: number
  menu_item_parent: string
  object_id: string
  object: 'page'
  type: 'post_type'
  type_label: 'Página'
  url: string
  title: string
  target: string
  attr_title: string
  description: string
  classes: string[]
  xfn: string
  slug: string
  child_items?: MenuItem[]
}
