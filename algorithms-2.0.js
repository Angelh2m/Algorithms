//
// .filter();
// .every();
// .indexOf();
// Array.from(bar);
// *******************************
// // Cesar Cipher
// ***************************

// function rot13(str) { // LBH QVQ VG!
//   str = str.split('').map(cipher).join('');
//   return str;
// }
//
// function cipher(letter) {
//
//   var symbolRegex = /[^a-zA-Z]/g;
//
//   if (symbolRegex.test(letter) ) {
//
//     return letter;
//
//   }
//
//   var codeAscii = letter.charCodeAt(0);
//
//   if (codeAscii > 77) {
//     codeAscii -= 13;
//   }else {
//     codeAscii += 13;
//   }
//
//   return String.fromCharCode(codeAscii);
//
//
// }
// // Change the inputs below to test
// console.log(rot13("SERR PBQR PNZC") );


function transform(str) {

  var lettersArr = str.split('');

  return lettersArr.map(function(element) {

    var letter = element.charCodeAt(0)
    if (letter < 68) {
        return String.fromCharCode(letter);
    } else if (letter >= 68) {
      return lettersArr.splice(letter, 1)
    }
  }).join('');

  // var x = str.jo in('');

  console.log(x);

}

console.log(transform('ABCDEFG'));

// Split str into a character array
// return str.split('')
// // Iterate over each character in the array
//   .map.call(str, function(char) {
//     // Convert char to a character code
//     x = char.charCodeAt(0);
//     // Checks if character lies between A-Z
//     if (x < 65 || x > 90) {
//       return String.fromCharCode(x);  // Return un-converted character
//     }
//     //N = ASCII 78, if the character code is less than 78, shift forward 13 places
//     else if (x < 78) {
//       return String.fromCharCode(x + 13);
//     }
//     // Otherwise shift the character 13 places backward
//     return String.fromCharCode(x - 13);
//   }).join('');  // Rejoin the array into a string
// }








// function cesaCipher(str, num) {
//   let lowercase = str.toLowerCase();
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
//   let newString = '';
//
//   for (var i = 0; i < lowercase.length; i++) {
//     let currentLetter = lowercase[i];
//
//     if(currentLetter === ' '){
//       newString += currentLetter;
//       continue;
//     }
//
//     var currentIndex = alphabet.indexOf(currentLetter);
//
//     var newIndex = currentIndex + num;
//
//     if (newIndex > 25 )  {
//       newIndex = newIndex - 26
//     }
//     if (newIndex > 25 )  {
//       newIndex = newIndex - 26
//     }
//
//
//   }
// }


// *******************************
// // Where do I belong
// ***************************

// function getIndexToIns(arr, num) {
//   arr.push(num);
//
//   arr.sort(function(a, b) {
//     return a - b;
//   });
//
//   return arr.indexOf(num);
//
//   // arr.sort(function(a, b){return a-b});
//   // return arr.indexOf(num);
// }
//
// getIndexToIns([40, 60], 50);



// *******************************
// // Destroyer
// ***************************


//
// function destroyer(arr) {
//
//   let secondArg = Array.from(arguments).slice(1);
//
//   return arr.filter(function(index) {
//       // console.log(index);
//       return !secondArg.includes(index);
//   })
//
//   console.log(secondArg);
//   // var args = Array.from(arguments).slice(1);
//   // return arr.filter(function(val) {
//   //   return !args.includes(val);
//   // });
//
// }
//
// console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3) );

// *******************************
// // Mutations
// ***************************


// function mutation(arr) {
//   return arr[1].toLowerCase()
//     .split('')
//     .every(function(letter) {
//       return arr[0].toLowerCase()
//         .indexOf(letter) !== -1;
//     });
// }
//
// mutation(["hello", "hey"]);

// function mutation(arr) {
//
//     let firstArr = arr[0].toLowerCase();
//     let secondArr = arr[1].toLowerCase();
//
//     for (var i = 0; i < firstArr.length; i++) {
//       if (firstArr.indexOf(secondArr[i]) === -1 ) {
//         return false
//       }
//         return true
//     }
// }
//
// mutation(["hello", "hey"]);

// function mutation(arr) {
//   var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();
//
//   console.log(target);
//   console.log(test.length);
//
//   for (i=0;i<test.length;i++) {
//     if (target.indexOf(test[i]) === -1)
//       return false;
//   }
//   return true;
//  }

// *******************************
// // Split arrays
// ***************************

// function slasher(arr, howMany) {
//
//     arr.splice(0, howMany)
//
//     return arr
// }
//
// slasher([1, 2, 3], 2);
//

// *******************************
// // Split arrays
// ***************************

// function chunkArrayInGroups(arr, size) {
//
//   var arr2 = [];
//
//   for (var i = 0; i < arr.length; i += size) {
//     arr2.push(arr.slice(i, i + size))
//   }
//   return arr2;
// }

// function chunkArrayInGroups(arr, size) {
//   var newArr = [];
//
//   while (arr.length) {
//     newArr.push(arr.splice(0, size))
//
//   }
//
//   return newArr
//   // var newArr = [];
//   // while (arr.length) {
//   //   newArr.push(arr.splice(0,size));
//   // }
//   // return newArr;
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);


// *******************************
// // Truncate a String
// ***************************

// function truncateString(str, num) {
//
//     if (str.length > num) {
//       return str.slice(0 , num > 3 ? num - 3 : num  ) + "..." ;
//     }
// }
//
//
// truncateString("A-tisket a-tasket A green and yellow basket", 14);
//


// *******************************
// // Repeat a string repeat a string
// ***************************


// function repeatStringNumTimes(str, num) {
//
//     if (num > 0) {
//       return str.repeat(num)
//     }else {
//       return str = '';
//     }
//
//     return str
//
// }
//
// console.log(repeatStringNumTimes("*", 3) );



// *******************************
// // Confirm the Ending
// ***************************

// function confirmEnding(str, target) {
//
// let x = str.substr(-target.length) == target;
//
//
//   console.log(x);
// }
//
//
// console.log(confirmEnding("Bastian", "n"));


// *******************************
// // Title Case a Sentence
// ***************************

// function titleCase(str) {
//
//   let x = str.toLowerCase().split(' ');
//
//   let string = x.map(function(element) {
//
//     return element.replace( element.charAt(0), element.charAt(0).toUpperCase());
//     // console.log(element.charAt(0).toUpperCase());
//   })
//
//   return string.join(' ');
//
//   // console.log(x);
// }
//
//
// console.log(titleCase("I'm a little tea pot"));


// *******************************
// // Longest word in a string
// ***************************



// function findLongestWord(str) {
//   str = str.split(' ');
//
//   return str.reduce(function(acc, current) {
//     return Math.max(acc, current.length)
//   },0)
//
//   // return str;
// }
//
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


// Solution 2

// function findLongestWord(str) {
//
//   var x = str.split(' ');
//   var maxLength = 0;
//
//   for (var i = 0; i < x.length; i++) {
//     // The loop will run intil they find the longest word
//     // This will find the longest word
//     if (x[i].length > maxLength) {
//       maxLength = x[i].length;
//     }
//   }
//
//   return maxLength;
//
// }
//
// findLongestWord("The quick brown fox jumped over the lazy dog");

// *******************************
// // Palindromes
// ***************************

//
// function palindrome(str) {
//
//   str = str.toLowerCase();
//   let wordArr = str.split('');
//   let validCharacters = 'abcdefghijkmnlopqrstuvwxyz'.split('');
//
//   let lettersArr = [];
//
//   // Make sure it contains letters and numbers
//   wordArr.forEach( function(element) {
//
//     if (validCharacters.indexOf(element) > -1 ) {
//       lettersArr.push(element)
//     }
//   });
//   console.log(lettersArr);
//
//   // Compare if they are the same when they are reversed
//   if (lettersArr.join('') ===  lettersArr.reverse().join('') ){
//     return true;
//   }else {
//     return false;
//   }
// }
//
//
//
// console.log(palindrome("eye"));



// *******************************
// // Factorial Numbers
// ***************************

// function factorialize(num) {
//
//   let x;
//   for (var i = 1; num >= 1; num--) {
//     i = num * i;
//   }
//
//   return i
//   ////** Recursion **///
//
//   // if (num === 0) {
//   //   return 1
//   // }
//   //
//   // return num * factorialize(num -1);
//
// }
//
// console.log(factorialize(4));


// *******************************
// // Reverse string
// ***************************


// function reverseString(str) {
//   str = str.split('').reverse().join('');
//
//   return str;
// }
//
// console.log(reverseString("hello"));
