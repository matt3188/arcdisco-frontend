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
          SEO {
            metaDescription
            metaTitle
          }
        }
      }
    }
  }
`
