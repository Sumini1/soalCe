// Soal:
// Count The Vowels
//hitung jumlah huruf vokal pada string
// expected output : 
// 9
// 6

let vowels = ['a','i','u','e','o'] // vokal

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : Gunakan perulangan dan pengkondisian

// Jawaban:
function countVowels (str, vowels) {
// write your code here
let  counter = 0; // variable baru untuk hitung huruf vocal
for (let letter of str.toLowerCase()) {
    //looping huruf yg ada di srting sekaligur toLowerCase
    if (vowels.includes(letter)) {
        //jika huruf vocal termasuk di dalam kumpulan huruf string
        counter++; //menghitung
    }
}
    return counter; //mengembalikan hasil hitung ke variable counter
}

console.log(countVowels("Selamat Pagi Duniaa!!", vowels))
console.log(countVowels("aku suka ngoding", vowels))
