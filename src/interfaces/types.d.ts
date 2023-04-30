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
