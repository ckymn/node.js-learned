### Merhaba arkadasalar burda Node.js orneklerini en temelden alarak Bildigim tum ozellikleri 		aktarmaya calisacagim.

/*express*/
	Express.js modulu/paketi , Node.js tabanli bir web uygulamasi sunucu catisidir.Express.js'in sundugu sinirsiz HTTP yardimcisi araclari ve katmanlar sayesinde saglama bir API olusturmak oldukca hizli ve kolydir.
	Express.js MEAN yazilim stack'in bir parcasidir.MEAN ,web uygulamalarinda ve dinamik web sitelerinin yapiminda kullanilan ucretsiz ve acik kaynak demetidir.Ayrica Express.js MEAN disinda pek cok Framework'un bir parcasidir.


/*morgan*/
	morgan , HTTP isteklerini ve hatalarını günlüğe kaydetmek için bir Node.js ve Express ara yazılımıdır ve süreci basitleştirir. Node.js ve Express'te, erişimi olan bir fonksiyon ara yazılımdır requestve responseyaşam döngüsü yöntemleri ve next()Hızlı sunucusunda mantığı devam etmek yöntemi.
	    $ npm install morgan --save

	morgan, HTTP isteklerini günlüğe kaydederken esneklik sağlar ve özel biçim dizelerinde veya ön ayarlarda kesin durumu ve yanıt süresini günceller. Daha fazla okuma için [morgan](https://www.npmjs.com/package/morgan) belgelerine bakın.

/*body-parser*/
	Body Parser isminden'de anlasilacagi uzere ugulamamiza gelen request'lerin body'lerini kullanmak uzere parse edilmesini(ayristirilmasini) saglamaktadir.
	/*ornek bir kullanim*/
	app.post('/link',function(req,res){
		console.log(req.body.res);
		res.send("link request Response")
	});

/*chalk*/
 	Node.js uygulamasinda hayati oneme sahip bu npm paketi, ozellikle loglarin okunmasi icin ve loglardaki detaylari daha net anlayabilmesi icin bazi ciktilari renklendirmeye gidebiliriz.ChalkJS bu isi yapmamizi saglar.
 	+>> console.log(chalk.blue.bgRed.bold('Middleware calisti'));
/*cookie-parser*/
	Request ile gelen Cookie'leri okumak ve donecegimiz response'a cookie set etmek icin kullanilan moduldur.Uygulama seviyesinde middleware olarak eklenir.

/*express.static*/
	Express Framework'un yapisal olarak bize sundugu , static dosyalarimizi kullanicilara sunmakta kullanilan bir middleware Moduludur. Static modulune klasor yolu olarak atadigimiz parametre ile bu lokasyonda bulunan dosyalar sunuc uzerinden kullanicilara gosterilmek uzere sunulur.

/*request*/
	Uygulamamizda bazi durumlarda servislere request(istek) atmamiz gerekebilir.Request atarken bize sagladigi en buyuk avantajlardan biride kullanilacak cok fazla yontemi desteklemesidir.

