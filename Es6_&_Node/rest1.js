const add = (...nums) => {
  let sum = 0
  nums.forEach(item => {
    return (sum += item)
  })
  console.log(sum)
}

add(1, 2, 3, 4, 5)

// REST operator
const nums = (...[a, b, c]) => {
  console.log(a) //1
  console.log(b) //2
  console.log(c) //3
}
nums(1, 2, 3, 4, 5)


// REST 2 operator
const nums3 = (...args) => {
  let sum = 0
  return args.map(item => (sum += item)).pop()
}
console.log(nums3(1,23,3,4,5,6,7,8))



// SPREAD operator
const nums1 = (a, b, c) => {
  let result = a + b + c
  return console.log(result)
}
const arr = [1, 2, 3, 4, 5,6,7,8,9,0,10,22,12,121,12,21241,41,43,64345,5435345,353453,53,553,5]
nums1(...arr)
