'use strict'

/**
 * Promise race metodu birden fazla promise sonucunu tek then ve catch blogu 
 * arasinda ilk doneni yonledirmemizi saglar
 * 
 */
let req1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('First!')
  }, 1000)
})
let req2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('Second!')
  }, 1000)
})

Promise.race([req1, req2])
  .then(reponse => {
    console.log('Then: ', reponse)
  })
  .catch(err => {
    console.log('Catch: ', err)
  })
