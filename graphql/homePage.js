// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const homePage = gql`
  query homePage {
    homePage {
      data {
        attributes {
          mainHeading
          description
          heroImage {
            data {
              attributes {
                url
              }
            }
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
