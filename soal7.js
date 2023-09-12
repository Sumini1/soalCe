// function tukar_besar_kecil(text){
//     // lengkapi kode berikut
//     let result = ' ';
//     for (let i = 0; i < text.length; i++) {
//       let huruf = text[i];
      
//       //cek apakah huruf adalah huruf  besar
//       if (huruf === huruf.toUpperCase()) {
//         //jika huruf besar, konversi ke huruf kecil dan tambahkan ke hasil

//         result += huruf.toLowerCase();
        
//       } else {
//         // jika huruf kecil atau bukan huruf, konversi ke huruf besar dan tambahkan ke hasil
//         result += huruf.toUpperCase();
//       }
      
//     }
//     return result;

//   }
  
  
//   console.log(tukar_besar_kecil('Hello World')); // "hELLO wORLD"
//   console.log(tukar_besar_kecil('I aM aLAY')); // "i Am Alay"
//   console.log(tukar_besar_kecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
//   console.log(tukar_besar_kecil('IT sHOULD bE me')); // "it Should Be ME"
//   console.log(tukar_besar_kecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


function pasanganTerbesar(number){
  // lengkapi kode berikut
let maxAngka = 0; //penamaan variable angka dg nilai nol

number = String(number); //ubah input menjadi string

for (let i = 0; i < number.length - 1; i++) { //loop
  
  const angka = parseInt(number[i] + number[i + 1]);

  if (angka > maxAngka) {
    maxAngka = angka;
    
  }
}
return maxAngka;
}


console.log(pasanganTerbesar("641573")); // 73
console.log(pasanganTerbesar("12783456")); // 83
console.log(pasanganTerbesar("910233")); // 91
console.log(pasanganTerbesar("71856421")); // 85
console.log(pasanganTerbesar("7981829399")); // 99