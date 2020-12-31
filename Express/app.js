const express = require('express')
const app = express()
const port = 3000

/**
 * @param {Middleware}. Herzaman en basta tanimlanmalidir. 
 *  http request'ler calismadan hemen once calistirilir.
*/ 
app.use('/', (req, res, next) => {
  console.log('Middleware calisti')
  next()
})

// http request
app.get('/', (req, res) => {
  res.send('Hello World..')
})
/**
 * @param {express.static}. html veya css dosyalarini cekmemizi saglar
 */
app.use('/static', express.static(__dirname))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
