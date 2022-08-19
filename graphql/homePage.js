// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'

export const homePage = gql`
  query homePage {
    homePage {
      data {
        attributes {
          content {
            content
          }
          carousel {
            heading
            sub_heading
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          carousel_settings {
            arrows
            dots
            autoplay
            autoplaySpeed
            slidesToShow
          }
          banner {
            heading
            content
            citation
            banner_image {
              data {
                attributes {
                  url
                }
              }
            }
            button_link
            button_text
          }
          seo {
            metaDescription
            metaTitle
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
