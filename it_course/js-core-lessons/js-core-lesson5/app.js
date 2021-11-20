// //1-100 arası asal sayı yazdırma burada 2 ve 3 yazıp 1 i elemeliyim
// console.log("1-100 arası asal sayı yazdırma");

// console.log(2);
// console.log(3);
// console.log(5);
// for (let i = 2; i<=100; i++){
    
//     if (i % 5 == 0 || i % 2 == 0 || i % 3 == 0){
//         continue;
//     } else {
//         console.log(i);
//     }
    
// }

// //1-1000 arası 5 katlarını eleyerek hesapla 100 e gelince bırak
// console.log("1-1000 arası 5 katlarını eleyerek hesapla 100 e gelince bırak");

// for (let e = 0; e<=1000; e++){
//     if(e===100) break; //100'e gelince bırakma komutu
//     if (e % 5 == 0){
//         continue;
//     } else {
//         console.log(e);
//     }
// }

// // zar atma oyunu 3 kez 3 çıkarsa ve 6 çıkarsa oyun bitsin
// console.log("zar atma oyunu üç kez 3 çıkarsa veya bir kez 6 çıkarsa oyun bitsin");

// // let x = Math.trunc(Math.random() * 20) +1; //rastgele sayı verme fonsksiyonu
// // console.log(x);

// var qq = Math.floor((Math.random() * 6) + 1);
// var summ = 0
// while(true){
//     if(qq == 6){
//         console.log(qq);
//         break;
//     }else{
//         if(qq ==3){
//             summ++
//         }
//         if (summ == 3) break;
//     }
// }
 
// console.log(qq);

let randomNumber = 0;
let countFor3 = 0;

while (randomNumber !== 6){
    randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log("randomNumber :>> ", randomNumber);
    if(randomNumber == 3) countFor3++;
    if(countFor3 > 2) { 
        console.log("3 comes third times, exiting ...");
        break;
    }
}




