// Soal:
// Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}
// Tidak boleh langsung print expected output
/*
Expected Output:
{ max: 67, min: 6 }
*/
// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:
// const maxMin = (array, searchValue) => {

// // function maxMin(array) {
// //     // write your code here
// // }
// let filtered = [67]; //untuk mencari nilai max
// //let filtered = [6]; // untuk mencari nilai minimal
// for (let i = 0; i < array.length; i++) {
//    if (array[i] === searchValue) {
//     filtered.push(array[i]);
//    }
//     return filtered;
// }
// }

// let array = [31, 9, 54, 11, 43, 6, 67];
// console.log(maxMin(array)); //cara mengeluarkan nilai max
// console.log(maxMin(array)); //cara mengeluarkan nilai minimal

//s Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}

const array = [31, 9, 54, 11, 43, 6, 67]

function maxMin(array) {

    let value = {
        max: array[0],
        min: array[0]
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] > value.max) value.max = array[i]
        if(array[i] < value.min) value.min = array[i]
    }

    return value
}

console.log(maxMin(array))