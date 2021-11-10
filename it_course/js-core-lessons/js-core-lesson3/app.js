var a = 10;
var b = 2;
var c = 3;
var d = 4;

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
