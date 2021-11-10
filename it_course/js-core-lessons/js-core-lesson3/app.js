var a = 10;
var b = 2;
var c = 3;
var d = 4;
var e = 7;
var f = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b); //mod alıyor
console.log(a%b);
console.log(a%c);
console.log(a**c);
console.log(a**c);

a = --b //atama operatorü sağdan sola çalışıyor
// a = b-- önce b kendini a ya eşitliyor sonra değeri 1 azaltıyor
console.log({a}); //süslü parantezler fonksiyo olarak çıktı veriyor.
console.log({b});

c = --d
console.log({c});
console.log({d});
console.log(typeof d, d);


console.log('d += e', d += e);
// console.log('d -= e', d -= e);
// console.log('d *= e', d *= e);
// console.log('d /= e', d /= e);

g = 10/3;
// console.log(g); 3.3333333333333335
console.log(parseInt(g));
console.log(Number(g));

var m = 10;
var n = '2';

o = m + n;

console.log({o}, typeof o );

p = +o;
console.log({p}, typeof p );

//  == değer eşit mi?  === değer tipiyle eşit mi?

var aa = '10';
var bb = '2';
var cc = 2;

console.log(aa>bb); // charCodeAt a göre 49, 48 den büyük old için false verdi.
console.log(aa.charCodeAt());//49 string karşılaştırmalarda charCodeAt not alınır.
console.log('1'.charCodeAt()); //49
console.log('0'.charCodeAt()); //48

console.log('A'>'a', "because A charCode value =", 'A'.charCodeAt(), 'but' ,'a charCode value =', 'a'.charCodeAt());
// false 'because A charCode value =' 65 'but' 'a charCode value =' 97

console.log(015+025); //34 -- 5+8=13 ve 5+16=21 top 34 burada 0 dan 7 ye 8lik sayı sistemine göre toplama yapar
console.log(15+025); //36 -- 15+21
console.log(015+25); //38 -- 13+225
console.log(15+25); //40 -- 15+25
//başına 0 koyarsak (oktav) 8 lik sayı sistemine göre toplama yapar.

