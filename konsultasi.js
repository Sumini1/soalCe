// Advanced Seating
// ================
// trainSeating adalah sebuah function yang menerima parameter berupa array of object.
// Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
// Yang berisi daftar nama penumpang dan tempat duduk penumpang.

// Contoh input dan output bisa dilihat di test case.

// function trainSeating(args){
//     // your code is here
// }

// console.log(trainSeating([
//   { nama: "Goku", gerbong: "VVIP", seat: 'A1' },
//   { nama: "Vegeta", gerbong: "VIP", seat: 'V1' },
//   { nama: "Sasuke", gerbong: "VVIP", seat: 'A2' },
//   { nama: "Naruto", gerbong: "Regular", seat: 'R1' },
//   { nama: "Sakura", gerbong: "Regular", seat: 'R3' },
//   { nama: "Luffy", gerbong: "VIP", seat: 'V2' },
//   { nama: "Zoro", gerbong: "VVIP", seat: 'A666' },
//   { nama: "Nami", gerbong: "VIP", seat: 'V6' }
// ]));
// /*
// Output :
// {
//   VVIP:
//   [ { nama: 'Goku', seat: 'A1' },
//     { nama: 'Sasuke', seat: 'A2' },
//     { nama: 'Zoro', seat: 'A666' } ],
//   VIP:
//   [ { nama: 'Vegeta', seat: 'V1' },
//     { nama: 'Luffy', seat: 'V2' },
//     { nama: 'Nami', seat: 'V6' } ],
//   Regular:
//     [ { nama: 'Naruto', seat: 'R1' },
//       { nama: 'Sakura', seat: 'R3' } ]
// }


// soal 2
// [INSTRUCTION]
// Buatlah sebuah array multi dimensi dengan menggunakan looping (boleh dengan while atau for)
// hanya dari inputan 1 parameter sebagai pemetannya

// console.log(arrayBoard(3));
// // output
// [
//     [1,2,3],
//     [6,5,4],
//     [7,8,9]
// ]

// console.log(arrayBoard(2));
// // output
// [
//     [1,2],
//     [3,4]
// ]

//soal 3
// Buatlah sebuah function bernama domino yang menerima satu parameter berupa number.
// function domino akan membuat sebuah kotak dengan simbol # dengan panjang dan tinggi sesuai number parameter.
// Kemudian, di bagian paling tengah dari kotak dituliskan kembali simbol # sepanjang sizenya dan setelah kotak terbagi
// dua maka di masing-masing sub kotak pada bagian tengahnya dituliskan angka domino.
// NOTE ANGKA YANG BERADA DITENGAH SUB KOTAK ADALAH ANGKA RANDOM DARI ANGKA DOMINO (1-6)

// Contoh untuk input 9:
// *********
// *       *
// *   3   *
// *       *
// *********
// *       *
// *   5   *
// *       *
// *********

//  // Contoh untuk input 10:
//  **********
// *        *
// *    6   *
// *        *
// **********
// **********
// *        *
// *    2   *
// *        *
// **********

// soal 4
// [INSTRUCTION]
// Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
// Disediakan variable height.
// Buatlah sebuah tangga angka dengan pola berikut:
// contoh 1 (height = 3):
// 321
// 21
// 1

// contoh 2 (height = 5):
// 54321
// 4321
// 321
// 21
// 1


// Cara penggunaan Github