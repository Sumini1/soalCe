/**
 * Anagram : Membandingkan 2 buah string apakah tersusun/dibentuk dari huruf yang sama atau tidak
 */

const checkAnagram = (kata1, kata2) => {
    // lengkapi code
      if (kata1 && kata2) {
        return true;
      } else if ( kata1 < kata_3) {
        return false;
      } else {
        return true;
      }
      
    }
  
  
  let kata_1 = "kamu";
  let kata_2 = "muka";
  let kata_3 = "maka";
  let kata_4 = "kaum";
  
  console.log(checkAnagram(kata_1, kata_2)); // "kamu" & "muka" => true
  console.log(checkAnagram(kata_1, kata_3)); // "kamu" & "maka" => false
  console.log(checkAnagram(kata_2, kata_3)); // "muka" & "maka" => false
  console.log(checkAnagram(kata_1, kata_4)); // "kamu" & "kaum" => true