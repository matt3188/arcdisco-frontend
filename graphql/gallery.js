// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const gallery = gql`
  query Gallery($name: String = "") {
    gallery {
      data {
        attributes {
          galleries(filters: { name: { eq: $name } }) {
            name
            images {
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
