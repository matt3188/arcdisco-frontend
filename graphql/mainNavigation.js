// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const mainNavigation = gql`
  query mainNavigation($navigationIdOrSlug: String = "main-navigation") {
    renderNavigation(
      navigationIdOrSlug: $navigationIdOrSlug
      type: TREE
      menuOnly: false
    ) {
      id
      title
      path
    }
  }
`
