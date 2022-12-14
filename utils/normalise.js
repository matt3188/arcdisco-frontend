/**
 * Flattens the data and attributes Objects
 * to make it easier to consume the response
 *
 * @param {Object} data
 * @returns {Object} Flat response
 */
export const normalise = (data) => {
  const isObject = (data) =>
    Object.prototype.toString.call(data) === '[object Object]'
  const isArray = (data) =>
    Object.prototype.toString.call(data) === '[object Array]'

  const flatten = (data) => {
    if (!data.attributes) return data

    return {
      id: data.id,
      ...data.attributes,
    }
  }

  if (isArray(data)) {
    return data.map((item) => normalise(item))
  }

  if (isObject(data)) {
    if (isArray(data.data)) {
      data = [...data.data]
    } else if (isObject(data.data)) {
      data = flatten({ ...data.data })
    } else if (data.data === null) {
      data = null
    } else {
      data = flatten(data)
    }

    for (const key in data) {
      data[key] = normalise(data[key])
    }

    return data
  }

  return data
}
