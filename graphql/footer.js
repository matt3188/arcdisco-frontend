// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const footer = gql`
  query Footer {
    footers {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
              }
            }
          }
          address
          email
          telephone
        }
      }
    }
  }
`
