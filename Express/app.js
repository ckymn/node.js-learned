const express = require('express')
const mw = require('./middleware')
const app = express()
const PORT = process.env.PORT || 3000

//middleware
app.use(mw.logger)

// http request
app.get('/', (req, res) => {
  res.send('Hello World..')
})
/**
 * @param {express.static}. html veya css dosyalarini cekmemizi saglar
 */
app.use('/static', express.static(__dirname))

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
