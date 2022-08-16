// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const aboutPage = gql`
  query aboutUs {
    aboutUs {
      data {
        attributes {
          heading
          content
          banner {
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
`