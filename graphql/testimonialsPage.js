// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const testimonialsPage = gql`
  query TestimonialsPage {
    testimonials {
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
    testimonialsPage {
      data {
        attributes {
          pageHeader {
            heading
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
  }
`
