const express = require('express')
const app = express()
const port = 3000

/**
 * @param {Middleware}. Herzaman en basta tanimlanmalidir. 
 * get function calismadan hemen once calistirilir.
*/ 
app.use('/', (req, res, next) => {
  console.log('Middleware calisti')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World..')
})
/**
 * @param {express.static}. html veya css dosyalarini cekmemizi saglar
 */
app.use('/stat', express.static(__dirname))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
