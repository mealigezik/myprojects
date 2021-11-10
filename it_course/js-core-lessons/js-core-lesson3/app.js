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
// Octal sayı sistemi 0,1,2,3,4,5,6,7
console.log(015+025); //34 -- 5+8=13 ve 5+16=21 top 34 burada 0 dan 7 ye 8lik sayı sistemine göre toplama yapar
console.log(15+025); //36 -- 15+21
console.log(015+25); //38 -- 13+225
console.log(15+25); //40 -- 15+25
//başına 0 koyarsak (octal) 8 lik sayı sistemine göre toplama yapar.

console.log(9<8); //false
console.log(9<8<7); //true  soldan sağa öncelik veriyor 
console.log(false < 7); // true -- false değeri sıfırdır ve 0 7 den küçüktür.
console.log(null < 3, null+3); // null sıfırdır   null+3 3 tür

// and &&
// or ||
// not !

/* console.log('false equals false, correct? ', false == false);
console.log('Boolean(0) equals FALSE, correct? ', Boolean(0) == false);
console.log('0 equals false, correct? ', 0 == false);
console.log('Boolean("0") equals TRUE, correct? ', Boolean('0') == true);
console.log('0' == false); */

/* console.log('\n*** null boolean operations ***');
// console.log('Boolean(null) equals to', Boolean(null)); 
// console.log('null == false equals to', null == false);
// console.log('null == true equals to', null == true); 
// console.log('null == null equals to', null == null); 
// console.log('typeof null equals to', typeof null); 
// console.log('0 == null equals to', 0 == null); // 
console.log('Boolean(null) == Boolean(0)', Boolean(null) == Boolean(0)); */
 
/* console.log('\n*** undefined boolean operations ***');
console.log('Boolean(undefined) equals', Boolean(undefined));
console.log('undefined == false correct?', undefined == false);
console.log('undefined == true correct?', undefined == true);
console.log('0 == undefined correct?', 0 == undefined);
console.log('null == undefined correct?', null == undefined);
console.log('null === undefined correct?', null === undefined); */

// console.log('\n*** NaN operations ***');
// console.log(NaN == NaN); 
// console.log(NaN === NaN); 
// console.log(typeof NaN);
// ! use global isNaN() function to overcome this

/* var a;
while (isNaN(a)){
    a = prompt("Enter a Number")
    a = Number(a)
	console.log(a, typeof a)
} */

/* console.log(false && true);
console.log( 2 && 0);
console.log(0 && 3);
console.log(2 && 3); */

// console.log(2 && 3 && 4 );

// OR

// console.log((8>2) || 3)
// console.log(0 || 3)

//Not

// console.log(!true);
// console.log(!false);
// console.log(!5);
// console.log(!0);


//Nullish
/* var n;
console.log(n);
// console.log(null ?? true);
// console.log((8>9) ?? 0);
console.log(n ?? 100);
console.log(100 ?? n); */