/*var name = prompt ("Neme");
console.log(name)


var ras = confirm("Vell come")
console.log(res)

if(name == "Mirzohid") {
console.log("kirganingdan minodorman")
}else{
    alert("Hush kelibsiz")
} */

/*paswort adn gmail*/

// var gmail = prompt("gmail kiriting");

// var pasword = prompt("parolingizni kiriting");

// alert("sizning malumotingiz qabul qilindi!");

// if (gmail == "ABD@gmail.com") {
//   alert("correct");
// } else {
//   alert("gmail error");
// }

// if (pasword == "123321") {
//   alert("correct");
// } else {
//   alert("pasword error");
// }

/*chekish
var test = 18;

if (18 < 23) {
  alert("chekishingiz mumkun");
} else {
  alert("sizga mumkun emas");
}

if (12 > 18) {
  alert("chekishingiz mumkun");
} else {
  alert("sizga mumkun emas");
}
*/

/*var text = prompt("Bu nimadurni bildirsin");

var index = prompt("men sizning ismingni bilaman");


if (text.charCodeAt(text) >= 65 && text.charCodeAt() >= 95) {
console.log("bu katta harf");
} else {
  console.log("bu harf xato");
}

if (index.charCodeAt(index) <= 97  ) {
  console.log("");
} else {

} */

// var text = prompt("matn kiriting");

// var methodName = prompt("methot nomini kiriting");

// if (methodName === "length") {
//   alert("The length property returns the length of a string:");
//   console.log(text.length);
// } else if (methodName === "slice") {
//   alert("extracts a part of a string and returns the extracted part in a new string:");
//   console.log(text.slice);
// } else if (methodName === "charAt") {
//   alert("The charAt() method returns the character at a specified index (position) in a string:");
//   console.log(text.charAt);
// } else if (methodName === "charCodeAt") {
//   alert("The charCodeAt() method returns the code of the character at a specified index in a string");
//   console.log(text.charCodeAt);
// } else if (methodName === "substring") {
//   alert("The difference is that start and end values less than 0 are treated as 0 in substring().");
//   console.log(text.substring);
// } else if (methodName === "substr") {
//   alert("The difference is that the second parameter specifies the length of the extracted part.");
//   console.log(text.substr);
// } else if (methodName === "at") {
//   alert("ES2022 introduced the string method at():");
//   console.log(text.at);
// } else {
//   alert("I don't now");
// }


// function checkThirdWord(text, prefix) {
//   let words = text.split(' ');
//   if (words.length >= 3) {
//       let thirdWord = words[2];
//       return thirdWord.startsWith(prefix);
//   }
//   return false;
// }

// // Misol uchun matn va prefiks:
// let text = "Bu katta loyiha boshlanadi.";
// let prefix = "lo";

// // Tekshirish:
// console.log(checkThirdWord(text, prefix)); // True qaytaradi

// function checkTimeFormat(timeStr) {
//   const formats = [
//       /^05:01 2024\/05\/07$/,
//       /^2024\/05\/07 05:01$/,
//       /^2024\.07\.05 05:01$/
//   ];

//   for (let format of formats) {
//       if (format.test(timeStr)) {
//           return true;
//       }
//   }
//   return false;
// }

// // Misol uchun vaqt:
// let timeStr = "05:01 2024/05/07";

// // Tekshirish:
// console.log(checkTimeFormat(timeStr)); // True qaytaradi


// function checkThirdWord(text, prefix) {
//   let words = text.split(' ');
//   if (words.length >= 3) {
//       let thirdWord = words[2];
//       return thirdWord.startsWith(prefix);
//   }
//   return false;
// }

// function checkTimeFormat(timeStr) {
//   const formats = [
//       /^05:01 2024\/05\/07$/,
//       /^2024\/05\/07 05:01$/,
//       /^2024\.07\.05 05:01$/
      
//   ];

//   for (let format of formats) {
//       if (format.test(timeStr)) {
//           return true;
//       }
//   }
//   return false;
// }

// // Misollar uchun tekshiruv:
// let text = "Bu katta loyiha boshlanadi.";
// let prefix = "lo";
// console.log(checkThirdWord(text, prefix)); // True

// let timeStr = "05:01 2024/05/07";
// console.log(checkTimeFormat(timeStr)); // True

// var text = prompt("matinlarni kiriting")
// var word = prompt("so'z kiriting")
// var length = prompt("uzunligi nechi")

// var char = text.matchAll(new RegExm(word,"ig"));


// var strings = [];
// var numbers = [];

// function processInput() {
//     var input = prompt("Qiymatni kiriting:");

//     if (!isNaN(input) && input.trim() !== "") {
//         numbers.push(Number(input));
//     } else {
//         strings.push(input);
//     }
// }

// console.log("Strings:", strings);
// console.log("Numbers:", numbers);


// function convertCurrency(uzs) {
//   const exchangeRates = {
//       USD: 11380.00,
//       EURO: 12450.00,
//       RUB: 150.00,
//       RUPIY: 145.00
//   };

//   let usd = uzs / exchangeRates.USD;
//   let euro = uzs / exchangeRates.EURO;
//   let rub = uzs / exchangeRates.RUB;
//   let rupiy = uzs / exchangeRates.RUPIY;

//   return {
//       USD: usd.toFixed(2),
//       EURO: euro.toFixed(2),
//       RUB: rub.toFixed(2),
//       RUPIY: rupiy.toFixed(2)
//   };
// }

// var uzs = prompt("UZS summasini kiriting:");
// let converted = convertCurrency(Number(uzs));

// console.log(`UZS: ${uzs}`);
// console.log(`USD: ${converted.USD}`);
// console.log(`EURO: ${converted.EURO}`);
// console.log(`RUB: ${converted.RUB}`);
// console.log(`RUPIY: ${converted.RUPIY}`);

// var text = prompt("Matn kiriting") 
// var type = prompt("Index kiriting")

var prompts = prompt("arrayga method kiriting");

var arr = ["Damas", "mers", "jiguli", "maybach", "captiva", "Cobolt", "BWD", "KY"];

if (prompts == "length") {
  console.log(arr.length);
}else if (prompts == "splice()"){
  console.log(arr.splice(0 ,7,)); 
}else if (prompts == "push()"){
  console.log(arr.push("Isuzi")); 
}else if (prompts == "pop()"){
  console.log(arr.pop("")); 
}else if (prompts == "toString()"){
  console.log(arr.toString());
}else if (prompts == "at()"){
  console.log(arr.at("6"));
}else if (prompts == "join()"){
  console.log(arr.join("$"));
}else if (prompts == "shift()"){
  console.log(arr.shift());
}else if (prompts == "unshift()"){
  console.log(arr.unshift("Treccer", "Nexiya3"));
}else if (prompts == "toSpliced()"){
  console.log(arr.toSpliced(0,5));
}else if (prompts == "slice()"){
  console.log(arr.slice(2));
}else{
  console.log("xato");
}
