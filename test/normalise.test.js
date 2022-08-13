import { normalise } from '~/utils/normalise'

const response = {
  data: {
    homePage: {
      data: {
        id: 1,
        attributes: {
          mainHeading: 'This is a test',
        },
      },
    },
  },
}

const normalised = {
  homePage: { id: 1, mainHeading: 'This is a test' },
}

describe('Normalise', () => {
  test('returns a flattened Object', () => {
    const wrapper = normalise(response)
    expect(wrapper).toEqual(normalised)
  })
})
