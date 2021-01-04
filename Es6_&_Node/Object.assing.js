/**
 * {Object.assign({},other1,other2,....)} nesneleri klonlama islemi
 */

const new1 = {}
const other1 ={name:'Node.js'}
const other2 ={isim:'ES6'}

Object.assign(new1,other1,other2)
console.log(new1.name == other1.name) //ture >>> ayni referans degerine sahip
console.log(new1.isim == other2.isim) //ture >>> ayni referans