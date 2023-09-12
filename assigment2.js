// Deskripsi Project

// Note

// Hanya boleh menggunakan looping ( for ), percabangan dan operator javascript, dilarang menggunakan javascript method/function bawaan es6 seperti subStr, subString, filter, split, join, foreach, dll (nilai -15 per soal)

 

// [INSTRUCTION]

// Buatlah sebuah function yang menerima sebuah parameter berupa string.

// function akan membalikan urutan per karakter dari karakter pertama hingga terakhir.
 

// [EXAMPLE]

// input: string: 'Semangat Ngoding', 

// proses: setiap karakter dan kata, akan diberdasarkan urutan kebalikannya

// output: gnidogN tagnameS

//  function balikKata(inputString) {
//     let newStr = "";

//     for (let i = inputString.length - 1; i >= 0; i--) {
//         newStr += inputString[i];
        
//     }
//     return newStr;
//  }




// // TEST CASES

// console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH

// console.log(balikKata('John Doe')); // eoD nhoJ

// console.log(balikKata('I am a bookworm')); // mrowkoob a ma I

// console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC

// console.log(balikKata('Super')); // repuS

 



 

// [INSTRUCTION]

// Buatlah sebuah function yang menerima sebuah parameter berupa string dan number.

// function akan memberikan dash (-) jumlah karakter yang ada di number.

// functin tidak akan menambahkan dash (-) jika tidak ada karakter yang tersisa.
 

// [EXAMPLE]

// input: string: 'Semangat'!, number: 3

// proses: setiap 3 karakter, akan ditambahkan dash

// output: Sem-ang-at!

 
function dashWord(inputString, number) {
    let dash = "";

    for (let i = 0; i < inputString.length; i++) {
        dash += inputString[i];
        if ((i + 1 % number) === 0 && i !== inputString[i].length) {
           
            dash += "-";
        }
    
        }
        return dash;
    }


// TEST CASES

console.log(dashWord('Semangat!', 3)); // Sem-ang-at!
console.log(dashWord('Uzumaki Naruto', 2)); // Uz-um-ak-i -Na-ru-to
console.log(dashWord('081234567890', 4)); // 0812-3456-7890
console.log(dashWord('Indonesia Hebat', 10)); // Indonesia -Hebat
console.log(dashWord('Love Coding', 1)); // L-o-v-e- -C-o-d-i-n-g


 

