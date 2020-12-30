'use strict'

/**
 * Promise all metodu tum promise islemlerinin bitmesini bekler.
 * Herhangi bir hata durumu ile karsilasir ise catch blogu calisir.
 * Herhangi bir hata yok ise tum promise data ekrana bastirilicak.
 */
const req1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('First!')
  }, 1000)
})
const req2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Second!')
  }, 2000)
})
const req3 = Promise.resolve('req3')
const req4 = fetch('http://jsonplaceholder.typicode.com/posts').then(res =>
  res.json()
)

Promise.all([req1, req2, req3,req4])
  .then(results => {
    console.log('Then: ', results)
  })
  .catch(err => {
    console.log('Catch: ', err)
  })
