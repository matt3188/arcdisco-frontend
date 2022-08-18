// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const termsPage = gql`
  query termsPage {
    termsAndCondition {
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
          content {
            content
          }
        }
      }
    }
  }
`
