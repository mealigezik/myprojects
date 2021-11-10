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


