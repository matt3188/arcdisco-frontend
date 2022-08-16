// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const footer = gql`
  query Footer {
    renderNavigation(navigationIdOrSlug: "footer-navigation") {
      id
      title
      path
    }
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
