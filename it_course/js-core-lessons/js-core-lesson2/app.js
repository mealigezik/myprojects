console.log("I'm from outside");
var quantity;

quantity = 3;
console.log(quantity);

var a = 5;
console.log(a);

var a = 10;
console.log('a baslangic : ', a);
{
    var b =5; //let yaparsak hata alır var yapınca almıyoruz. let hafıza daha az yer tutar
    console.log('scope içinde b :', b);
}

console.log(a);
console.log(b);

var myColor = 'Red';
console.log(myColor);

var x = 3;
var y = 10;
console.log(x*y);

var k = 5;
var l = 5.66; //integer 15 digit float noktodan sonra 17 digit

console.log(typeof a);
console.log(typeof b);

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

console.log(0.1+0.2);
console.log((0.1+0.2).toFixed(3)); //2 digitli yazdırıyor string
console.log(+(0.1+0.23333).toFixed(2)); //2 digitli yazdırıyor number

var pc = 'Lenova';
console.log('Merhaba',pc);
console.log(`Merhaba ${pc}`); // ` ile ' aynı değildir. İki tırnak işareti de farklı

console.log(Boolean(''));
console.log(Boolean(' ')); //boşluk da karakterdir ve true verir
console.log(Boolean(8<9));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(null));

