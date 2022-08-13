// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const testimonials = gql`
  query Testimonials($limit: Int = 20) {
    testimonials(pagination: { limit: $limit }) {
      data {
        attributes {
          date
          author
          event
          poptop_review
          testimonial
        }
      }
    }
  }
`
