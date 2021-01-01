/**
 * *Middleware: Veritabani,kimlik dogrulama,ileti kontrolleri gibi amaclarda ara katman olarak kul
 */
const mw = {
  logger: (req, res, next) => {
    console.log('Middleware calisti')
    next()
  }
}

module.exports = mw
