/**
 *
 * @param  {...any} theArgs. callback function
 */
const sum = (...theArgs) => {
  return theArgs.reduce((number1, number2) => {
    return number1 + number2
  })
}

console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5))

