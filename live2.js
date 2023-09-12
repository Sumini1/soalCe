/**
 * Anagram : Membandingkan 2 buah string apakah tersusun/dibentuk dari huruf yang sama atau tidak
 */

/*
onst checkAnagram = (kata1, kata2) => {
    // lengkapi code
      return kata1.toLowerCase().split('').sort().join('') === kata2.toLowerCase().split('').sort().join('') 
    }

  let kata_1 = "kamu";
  let kata_2 = "muka";
  let kata_3 = "maka";
  let kata_4 = "kaum";
  
  console.log(checkAnagram(kata_1, kata_2)); // "kamu" & "muka" => true
  console.log(checkAnagram(kata_1, kata_3)); // "kamu" & "maka" => false
  console.log(checkAnagram(kata_2, kata_3)); // "muka" & "maka" => false
  console.log(checkAnagram(kata_1, kata_4)); // "kamu" & "kaum" => true
  */




  /*
  Pada array, dapat dilakukan pengambilan sebagian data dari index tertentu sampai index tertentu
  Terdapat fungsi bawaan javascript "slice" untuk melakukan hal tersebut

  cobalah untuk membuat custom function yang seperti slice

*/


/* Soal ke-2
const customSlice = (arr, start, end) => {
  // tulis code di sini

  //initial value untuk hasil
  let result = [];
  if (start < 0) {
    //kalau jaga2 start nya dimulai dg angka minus
    start = 0;
  }

  if (end > arr.length - 1) {
    end = arr.length -1;  //index tertinggi pada arraynya
  }

  //prosesnya
  for (let i = start; i <= end; i++) {
    result.push(arr[i]);
  }
  return result;
}

let data = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh'];
console.log(customSlice(data, 1, 5)); // [ 'satu', 'dua', 'tiga', 'empat', 'lima' ]
console.log(customSlice(data, 3, 20)); // [ 'tiga', 'empat', 'lima' , 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh' ]
console.log(customSlice(data, 0, 3)); // [ 'nol', 'satu', 'dua', 'tiga' ]
console.log(customSlice(data, -3, 3));
*/



// Soal ke-3
/*
function tukar_besar_kecil(text){
    // lengkapi kode berikut
    let result = ' ';
    for (let i = 0; i < text.length; i++) {
      let huruf = text[i];
      
      //cek apakah huruf adalah huruf  besar
      if (huruf === huruf.toUpperCase()) {
        //jika huruf besar, konversi ke huruf kecil dan tambahkan ke hasil

        result += huruf.toLowerCase();
        
      } else {
        // jika huruf kecil atau bukan huruf, konversi ke huruf besar dan tambahkan ke hasil
        result += huruf.toUpperCase();
      }
      
    }
    return result;
  }
  
  console.log(tukar_besar_kecil('Hello World')); // "hELLO wORLD"
  console.log(tukar_besar_kecil('I aM aLAY')); // "i Am Alay"
  console.log(tukar_besar_kecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukar_besar_kecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukar_besar_kecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
*/


// Cara Singkatnya soal ke-2, pake operator ternary
/*
function tukar_besar_kecil(text){
  // lengkapi kode berikut
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += text[i] === text[i].toLowerCase()? text[i].toLowerCase() : text[i].toLowerCase();
    
  }
  return result;
}

console.log(tukar_besar_kecil('Hello World')); // "hELLO wORLD"
console.log(tukar_besar_kecil('I aM aLAY')); // "i Am Alay"
console.log(tukar_besar_kecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukar_besar_kecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukar_besar_kecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
*/


// Contoh penggunaan Map
/*function tukar_besar_kecil(str){
  // lengkapi kode berikut
  return str
  .split('')
  .map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  })
  .join('');
}
*/

// console.log(tukar_besar_kecil('Hello World')); // "hELLO wORLD"
// console.log(tukar_besar_kecil('I aM aLAY')); // "i Am Alay"
// console.log(tukar_besar_kecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukar_besar_kecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukar_besar_kecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


/*
let array = [12, 11, 34, 20, 40];

// looping biasa (umum) => fungsinya  cuma LOOP AJA
for (let i = 0; i < array.length; i++) {
  //...
}
// Fungsi = LOOP AJA
array.forEach((value, index, arrayituSendiri) => {
 console.log({value, index, arrayituSendiri});
})

//Fungsi = melakukan filter (misal filter bilangan genap)Filtered
let resultFiltered = array.filter((val) => {
  return val % 2 === 0; // true atau false
});
console.log(resultFiltered);


//Fungsi = memodifikasi data (setiap value + 5)
let resultModified = array.map((val) => {
  return val + 5; // val yg di Modified
});
console.log(resultModified);
*/



// Contoh Regex
/*
let string = "HAlo HAlo bandung";
let result = string.replace(/[a-z]/gi, (match) => {
  return  "..." +match.toLowerCase()+"...";
});
console.log(result);
*/



// Soal Tambahan
function pasanganTerbesar(number){
  // lengkapi kode berikut
let terbesar = 0; //penamaan variable angka dg nilai nol

//proses
for (let i = 0; i < number.length; i++) {
  let num = parseInt(number[i] + number[i+1]);
  if (num > terbesar) {
    terbesar = num;
  }
}
return terbesar;
}

console.log(pasanganTerbesar("641573")); // 73
console.log(pasanganTerbesar("12783456")); // 83
console.log(pasanganTerbesar("910233")); // 91
console.log(pasanganTerbesar("71856421")); // 85
console.log(pasanganTerbesar("7981829399")); // 99
