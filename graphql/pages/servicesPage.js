// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const servicesPage = gql`
  query OurServices {
    ourService {
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
          services {
            name
            image {
              data {
                attributes {
                  url
                }
              }
            }
            description
            button_text
            button_link
          }
        }
      }
    }
  }
`
