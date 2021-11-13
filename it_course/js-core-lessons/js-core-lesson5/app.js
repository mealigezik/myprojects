//1-100 arası asal sayı yazdırma burada 2 ve 3 yazıp 1 i elemeliyim
console.log("1-100 arası asal sayı yazdırma");

console.log(2);
console.log(3);
console.log(5);
for (let i = 2; i<=100; i++){
    
    if (i % 5 == 0 || i % 2 == 0 || i % 3 == 0){
        continue;
    } else {
        console.log(i);
    }
    
}

//1-1000 arası 5 katlarını eleyerek hesapla 100 e gelince bırak
console.log("1-1000 arası 5 katlarını eleyerek hesapla 100 e gelince bırak");

for (let e = 0; e<=1000; e++){
    if(e===100) break; //100'e gelince bırakma komutu
    if (e % 5 == 0){
        continue;
    } else {
        console.log(e);
    }
}

// zar atma oyunu 3 kez 3 çıkarsa ve 6 çıkarsa oyun bitsin
console.log("zar atma oyunu 3 kez 3 çıkarsa ve 6 çıkarsa oyun bitsin");






