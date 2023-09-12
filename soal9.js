// Soal:
// berikan spasi di antara kata yang terdapat pada string berikut
//expected output : 
// Selamat Pagi Dunia
// Aku Suka Javascript

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : gunakan perulangan dan pengkondisian

// Jawaban:
function manipulateString(str) {
        let newStr = ""; //buat variable penampung string baru

        for (let letter of str) {
            //looping semua huruf di string
        if (letter === letter.toUpperCase()) {
            // jika ada huruf yang kapital
            newStr += " "; //maka ditambahkan spasi
        }
        newStr += letter; //masukan semua huruf string ke dalam variable baru
}
return newStr
}

console.log(manipulateString("SelamatPagiDunia"))
console.log(manipulateString("AkuSukaJavascript"))

