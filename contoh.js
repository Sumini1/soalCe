// let iniString = "Hallo Ini text";

// console.log(iniString[6]);
// console.log(iniString.includes("halo"));


// // catatan, terkait string, huruf capital beroengaruh
// let dijadikanKecil = iniString.tolowerCase


// Belajar array
/* let iniArray = [111, 222, 333]; //possisi item dimulai dari 0

console.log(iniArray[1]); //posisi itemnya
console.log(iniArray.includes(222)); //item nya
// console.log(iniArray.includes(123)); // includes  untuk menc di dlm array
console.log(iniArray.length); //jumlsh itemnya */



// Array string (text)
/*
let iniString = "HALO INI ada text";

console.log(iniString[1]); //hasilnya mengconsole huruf ke-2 yaitu a, 
console.log("aku sedang belajar"); //hasilnya huruf yg ada dlm tanda petik 
console.log(iniString.includes("halo")); //mencari item dalam array 

let dijadiinkecil = iniString.toLowerCase(); //cara menjadikan huruf  string yg kapital menjadi kecil
console.log(dijadiinkecil);  
*/

// Object = sesuatu yg memiliki prorperty (atribut) dan method
 /*
  let iniObject = {
    iniProperty1: "value 1",
    iniProperty2: "aku suka belajar",
    iniProperty3: "belajar membuat kita berilmu"
  }
  console.log(iniObject.iniProperty2); // cara akses property ke-1
  console.log(iniObject["iniProperty3"]); //cara akses ke-2 
  */


  // methode
  /* 
  let iniObject = {
    iniProperty1: "value 1",
    iniProperty2: "value 2",
    iniProperty3: "value 3",
    iniFunction: function() {
      return "hari ini";
    }
  }
  const hiitungLuasSegitiga = (alas, tinggi) => {
    return alas * tinggi / 2;
  }

  console.log(iniObject.iniFunction()); //cara manggil function (methode)
   */



  // Looping
  /*
  let array = [1,3,5,6,8,9,10,11,23,15];

  // fungsi looping = looping angka, dari berapa dan dilakukan sampai kapan
  // cara ke-1
  for (let  i= 0;  i < 6; i++) {
    console.log(array[i]);
  } */ 
  //cara ke-2
  /* for (let  i= 0;  i < array.length; i++) {
    let ganjilOrGenap = array[i] % 2 === 0 ? "genap" : "ganjil";
    console.log(`Angka ${array[i]} adalah bilangan ${ganjilOrGenap}`);
  } */


  // 
  /* Function
    function = untuk melakukan suatu proses
    function bisa punya "parameter" => parameter adalah sesuatu yang dibutuhkan untuk diproses
    function bisa "menghasilkan sesuatu" => return value */

    /*
    function luasSegitiga (alas, tinggi) {

    }
    const hiitungLuasSegitiga = (alas, tinggi) => {
      return alas * tinggi / 2;
    }
    let result1 = hiitungLuasSegitiga(10, 10);
    console.log(result1); 
    */
  


  // soal ke-1
  /* konsep penyelesaian
  - declarre variable (nisal let count = 0)
  - lakukan looping untuk setiap item array
  - disetiap looping cek apakah item tersebut sama dengan "value yang dicari"
    -jika sama, count++ 
    */
    /* const countData =(arr, searchValue) => {
      // tulis code di sini

      // initial value / variable penampung
      let count =0;

      // proses : mencari data yg sesuai, kalau sama, maka count++
      for (let i = 0; i < arr.length; i++) {
        if  (arr[i] === searchValue) {
          count++
        }
      }

      // return hasilnya
      return count;
    }
  
    let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
    console.log(countData(data_array,5));
    console.log(countData(data_array,1)); */


// soal ke-2
/*
const countManual = (arr) => {
  // tulis code di sini

  // initial value
  let count = 0;

  // process
  // infinity loop
  for (let i = 0; i >= 0; i++) {  //let i untuk mengecek index array
    
    console.log(arr[i]);
    
    // break, if...(item is undefined)
    if (arr[i] === undefined) {
      break;
    }
    count++;
  }
  return count;
}
let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(data_array.length); 
*/

// while itu akan dijalankan selama nilainya itu true
/*
const countManual = (ppp) => {
 let count = 0;
 let i = 0; //untuk mengecek index array selanjutnya, ada ga item arrat di index tsb
 
 let continueLooping = true;
 while ( continueLooping ) {
  if (ppp[i] === undefined) {
    continueLooping = false;
  }
  else {
    count++;
    i++;
  }
}
  return count;
 }
 let data_array = [1,2,3,4,5,6];
 console.log(countManual(data_array));
 */
 



// soal ke-3
/* 
- melakukan filter angka: hanya menampilkan angka yg diminta
- Gunakan looping "for", tidak boleh menggunakan method "javascript filtered"
*/

const filterData = (arr, searchValue) => {
  // tulis code di sini


  // initial value = data penampung
  let filtered = [];

  // proses
  for (let i = 0; i < arr.length; i++) {
 //if (arr[i] === searchValue) { //cara mencari satu items
  if ( searchValue.includes( arr[i] )) { // cara mencari 2 items
  filtered.push(arr[i]);
 }
    
  }

  // return
  return filtered;
}
let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, [4, 2, 6])); //output 2 items
//console.log(filterData(data_array, 5)); //output 1 items


// soal ke-4

// student = [
//   {nama: "Andi", grade: 7.5},
//   {nama: "Andi", grade: 9},
//   {nama: "Andi", grade: 7},
//   {nama: "Andi", grade: 6},
//   {nama: "Andi", grade: 8}
// ];
// const filterGrade7 = (dataStudent) => {
//   let filtered = [];
//   for (let i = 0; i < dataStudent.length; i++) {
//       if (dataStudent[i].grade > 7) {
//           filtered.push(dataStudent[i]);
//       }
//   }
//   return filtered;
// }
// let filteredStudents= filterGrade7(student);
// console.log(filteredStudents);



/*
const i = 5.3; // const bisa diubah value nya dg let dibawahnya
let iPlus2 = i + 2;

console.log(iPlus2);
*/

// let iniString = "Hallo Ini text";

// console.log(iniString[6]);
// console.log(iniString.includes("halo"));


// // catatan, terkait string, huruf capital beroengaruh
// let dijadikanKecil = iniString.tolowerCase


// Belajar array
/* let iniArray = [111, 222, 333]; //possisi item dimulai dari 0

console.log(iniArray[1]); //posisi itemnya
console.log(iniArray.includes(222)); //item nya
// console.log(iniArray.includes(123)); // includes  untuk menc di dlm array
console.log(iniArray.length); //jumlsh itemnya */



// Array string (text)
/*
let iniString = "HALO INI ada text";

console.log(iniString[1]); //hasilnya mengconsole huruf ke-2 yaitu a, 
console.log("aku sedang belajar"); //hasilnya huruf yg ada dlm tanda petik 
console.log(iniString.includes("halo")); //mencari item dalam array 

let dijadiinkecil = iniString.toLowerCase(); //cara menjadikan huruf  string yg kapital menjadi kecil
console.log(dijadiinkecil);  
*/

// Object = sesuatu yg memiliki prorperty (atribut) dan method
 /*
  let iniObject = {
    iniProperty1: "value 1",
    iniProperty2: "aku suka belajar",
    iniProperty3: "belajar membuat kita berilmu"
  }
  console.log(iniObject.iniProperty2); // cara akses property ke-1
  console.log(iniObject["iniProperty3"]); //cara akses ke-2 
  */


  // methode
  /* 
  let iniObject = {
    iniProperty1: "value 1",
    iniProperty2: "value 2",
    iniProperty3: "value 3",
    iniFunction: function() {
      return "hari ini";
    }
  }
  const hiitungLuasSegitiga = (alas, tinggi) => {
    return alas * tinggi / 2;
  }

  console.log(iniObject.iniFunction()); //cara manggil function (methode)
   */



  // Looping
  /*
  let array = [1,3,5,6,8,9,10,11,23,15];

  // fungsi looping = looping angka, dari berapa dan dilakukan sampai kapan
  // cara ke-1
  for (let  i= 0;  i < 6; i++) {
    console.log(array[i]);
  } */ 
  //cara ke-2
  /* for (let  i= 0;  i < array.length; i++) {
    let ganjilOrGenap = array[i] % 2 === 0 ? "genap" : "ganjil";
    console.log(`Angka ${array[i]} adalah bilangan ${ganjilOrGenap}`);
  } */


  // 
  /* Function
    function = untuk melakukan suatu proses
    function bisa punya "parameter" => parameter adalah sesuatu yang dibutuhkan untuk diproses
    function bisa "menghasilkan sesuatu" => return value */

    /*
    function luasSegitiga (alas, tinggi) {

    }
    const hiitungLuasSegitiga = (alas, tinggi) => {
      return alas * tinggi / 2;
    }
    let result1 = hiitungLuasSegitiga(10, 10);
    console.log(result1); 
    */
  


  // soal ke-1
  /* konsep penyelesaian
  - declarre variable (nisal let count = 0)
  - lakukan looping untuk setiap item array
  - disetiap looping cek apakah item tersebut sama dengan "value yang dicari"
    -jika sama, count++ 
    */
    /* const countData =(arr, searchValue) => {
      // tulis code di sini

      // initial value / variable penampung
      let count =0;

      // proses : mencari data yg sesuai, kalau sama, maka count++
      for (let i = 0; i < arr.length; i++) {
        if  (arr[i] === searchValue) {
          count++
        }
      }

      // return hasilnya
      return count;
    }
  
    let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
    console.log(countData(data_array,5));
    console.log(countData(data_array,1)); */


// soal ke-2
/*
const countManual = (arr) => {
  // tulis code di sini

  // initial value
  let count = 0;

  // process
  // infinity loop
  for (let i = 0; i >= 0; i++) {  //let i untuk mengecek index array
    
    console.log(arr[i]);
    
    // break, if...(item is undefined)
    if (arr[i] === undefined) {
      break;
    }
    count++;
  }
  return count;
}
let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(data_array.length); 
*/

// while itu akan dijalankan selama nilainya itu true
/*
const countManual = (ppp) => {
 let count = 0;
 let i = 0; //untuk mengecek index array selanjutnya, ada ga item arrat di index tsb
 
 let continueLooping = true;
 while ( continueLooping ) {
  if (ppp[i] === undefined) {
    continueLooping = false;
  }
  else {
    count++;
    i++;
  }
}
  return count;
 }
 let data_array = [1,2,3,4,5,6];
 console.log(countManual(data_array));
 */
 



// soal ke-3
/* 
- melakukan filter angka: hanya menampilkan angka yg diminta
- Gunakan looping "for", tidak boleh menggunakan method "javascript filtered"
*/

const filterData = (arr, searchValue) => {
  // tulis code di sini


  // initial value = data penampung
  let filtered = [];

  // proses
  for (let i = 0; i < arr.length; i++) {
 //if (arr[i] === searchValue) { //cara mencari satu items
  if ( searchValue.includes( arr[i] )) { // cara mencari 2 items
  filtered.push(arr[i]);
 }
    
  }

  // return
  return filtered;
}
let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, [4, 2, 6])); //output 2 items
//console.log(filterData(data_array, 5)); //output 1 items


// soal ke-4

// student = [
//   {nama: "Andi", grade: 7.5},
//   {nama: "Andi", grade: 9},
//   {nama: "Andi", grade: 7},
//   {nama: "Andi", grade: 6},
//   {nama: "Andi", grade: 8}
// ];
// const filterGrade7 = (dataStudent) => {
//   let filtered = [];
//   for (let i = 0; i < dataStudent.length; i++) {
//       if (dataStudent[i].grade > 7) {
//           filtered.push(dataStudent[i]);
//       }
//   }
//   return filtered;
// }
// let filteredStudents= filterGrade7(student);
// console.log(filteredStudents);



/*
const i = 5.3; // const bisa diubah value nya dg let dibawahnya
let iPlus2 = i + 2;

console.log(iPlus2);
*/

