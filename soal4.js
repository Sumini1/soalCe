
// Soal:
// Hilangkan Karakter Berulang yang terdapat pada String
// Clue : menggunakan perulangan
// Tidak boleh langsung print expected output

/*
Expected Output:
[ 'A', 'B', 'C', 'D', 'F', 'G' ]
[ 'R', 'O', 'A', 'Q', 'P' ]
*/

// Jawaban:
function removeDuplicates (str) {
    let result = []; // membuat array untuk menyimoan karakter unik
    
    for (let i = 0; i < str.length; i++) {
        //jika karakter saat ini tidak sama dengan karakter sebelumnya,tambahkan ke hasil
        if (i === 0|| str[i] !== str[i-1]) {
            result.push(str[i]);
        }
    }
    return result; //mengembalikan array karakter unik
    
};

console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"))
console.log(removeDuplicates("RRRRROOOAAQPPP"))
