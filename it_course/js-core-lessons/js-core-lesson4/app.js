
let score = 90;
// let grade = score >= 50;
// console.log(grade);


if (score >=80) {
    console.log(`Congratulate Your Score is ${score}, very good.`);
}else if(score >= 50){
    console.log(`Congratulate Your Score is ${score}, passed.`);
}else{
    console.log(`Sorry, your score is ${score}, couldn't pass.`);
}

console.log(`Bye bye!`); //if in else i olmayınca müteakip komutu çalıştırıyor.

// Other Example

let scores = 50;

scores >= 50 ? console.log(`Congratulate Your Score is ${scores}, passed.`) :
              console.log(`Sorry, your score is ${scores}, couldn't pass.`);


let username = `Frank` ; //let username ; yazarsam sadece Please Login çıkar username e değer atamadığım için.
username ? console.log(`Merhaba ${username}`) : console.log(`Please login.`);


let userName = `Frank` //let userName; karşılığı olmadığı için && ilk entryden ileriye ggitmez ve undefined çıkar
console.log(userName && console.log(`Merhaba ${userName}`));


// Switch Case Yapısı 

var text;
var fruits = 'BaNaNa'; //Banana yazarsan ilk case çalışır.
// var fruits = prompt("Please enter fruit name : ")  bu komut ile entry alıyoruz.

switch (fruits.toLowerCase()) { //toLowerCase komutu hepsini küçük graflere dönüştürüyor
    case "banana":
    case "lemon":
    case "lime":
        text = `${fruits} is good!`;
        break;
    case "Orange":
        text = "I am not fan of Orange!";
        break;
    case "Apple":
        text = "How you like them Apples";
        break;
    default:
        text = `I have neveR heard of ${fruits}`;   
}
console.log(text);