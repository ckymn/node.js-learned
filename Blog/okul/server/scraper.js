const cheerio = require("cheerio");
const fetch = require("node-fetch");

const url = "https://ue.firat.edu.tr";

function getKonutlar() {
  return fetch(`${url}`)
    .then((response) => response.text())
    .then((body) => {
      const satilikKonutlar = [];
      const $ = cheerio.load(body);
      console.log(body);
      $(".box.py-3.generalbox.sitetopic").each(function (i, el) {
        const ders_adi = $(el).find("a > h3 > small > br").text();
        const ders_konusu = $(el).find("a > h3").text();
        const ders_linki = $(el).find(".ng-tns-c2-0").attr("href");
        const ders_tarihi = $(el).find("div > h4 > span").text();
        const konutlar = {
          ders_tarihi,
        };
        satilikKonutlar.push(konutlar);
      });
      return satilikKonutlar;
    });
}



module.exports = {
  getKonutlar
};