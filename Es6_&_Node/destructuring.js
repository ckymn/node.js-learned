/**
 * {destructuring}:
 *  *Nesneleri parcalamak es6 ile beraber gelen bir ozeelliktir
 *  *
 */

const nesne = {
  status: 'running',
  name: 'muhammet',
  count: 14,
  price: 1400
}
console.log(nesne.status)
console.log(nesne.price)
console.log(nesne.count)

//DESTRUCTURING

const { status, name, count, price } = nesne
console.log(status)
console.log(price)
console.log(count)

// * Destructuring konusunda NaN hatasi olabiliyor bolme islemlerinde bunu ortadan kaldirmak icin
// * mutlaak deger icermesi gereken yerlere 'default' deger atamasi yapabiliriz

const bolme = ({ sayi1, sayi2 = 2 }) => {
  return console.log(sayi1 / sayi2)
}

const sayilar = {
  sayi1: 1
}
bolme(sayilar)
