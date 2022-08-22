// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const galleryPage = gql`
  query Galleries {
    gallery {
      data {
        attributes {
          header {
            heading
            banner {
              data {
                attributes {
                  url
                }
              }
            }
          }
          banner {
            heading
            content
          }
          galleries {
            id
            name
            cover {
              data {
                attributes {
                  formats
                }
              }
            }
          }
        }
      }
    }
  }
`
