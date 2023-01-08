const find = (array, callback) => {
  let foundValue = false
  let index = 0
  array.forEach((value) => {
    if (!foundValue && callback(value, index)) foundValue = value
    index++
  })
  return foundValue
}

const findIndex = (array, callback) => {
  let foundValue = false
  let index = 0
  array.forEach((value) => {
    if (!foundValue && callback(value, index)) {
      foundValue = index
    }
    index++
  })
  return foundValue
}

module.exports = { find, findIndex }
