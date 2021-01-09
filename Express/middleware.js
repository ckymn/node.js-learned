/**
 * *Middleware: Veritabani,kimlik dogrulama,ileti kontrolleri gibi amaclarda ara katman olarak kul
 */
const chalk = require("chalk");

const mw = {
  logger: (req, res, next) => {
    console.log(chalk.blue.bgRed.bold('Middleware calisti'));
    next()
  }
}

module.exports = mw
