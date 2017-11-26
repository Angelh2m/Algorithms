





// function Animal(name) {
//     // Instance properties can be set on each instance of the class
//     this.name = name;
// }
//
// // Prototype properties are shared across all instances of the class. However, they can still be overwritten on a per-instance basis with the `this` keyword.
// Animal.prototype.speak = function() {
//     console.log("My name is " + this.name);
// };
//
// var animal = new Animal('Monty');
// animal.speak(); // My name is Monty
//
//


// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   sleep(){
//     console.log(`${this.name} is sleeping `);
//   }
// }
//
// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   bark(){
//     console.log(`${this.name} Woof Woof `);
//
//   }
// }
//
// dog = new Dog('Lassie')
//
// console.log(dog.bark());
// console.log(dog.sleep());

// *******************************
// // Prototype Inheritance
// ***************************

// let Person = function(name) {
//
// }




// *******************************
// // Fetch
// ***************************

// var url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
//
//
// fetch(url)
// .then(function(response) {
//   console.log(response);
//   // console.log(response.json());
//   return response.json()
// })
// .then(function(data) {
//   console.log(data);
// })

// *******************************
// // Ajax
// ***************************
// var XHR = new XMLHttpRequest();
//
// XHR.onreadystatechange = function() {
//   // console.log('ready' + XHR.readyState);
//   if (XHR.readyState == 4) {
//     if (XHR.status == 200) {
//       XHR.responseText;
//       console.log(XHR.responseText);
//     }else{
//       console.log('There was a problem');
//     }
//
//   }
// }
//
// XHR.open('GET', 'https://api.github.com/zen');
// XHR.send();

// *******************************
// // remove-duplicates
// ***************************

// var a = ['a', 1, 'a', 2, '1',4,4,5,6,7,8,8];
//
// function arrayFirstUnique(array) {
//
//       return array.filter(function (value, index, array) {
//           // keeps first occurrence
//           // console.log('index: '+ index + ' Value: ' + value + ' array: '+ array);
//
//           // Check if the value exist in the index
//           return array.indexOf(value) === index;
//       });
// }
//
// console.log(arrayFirstUnique(a));


// var arr = [1, 3, 4, 1, 2, 1, 3, 3, 4, 1];
// console.log([...new Set(arr)]);

// *******************************
// // For in -> property names / Uniterable objects
// // For of -> property values / literable objecs array map set
// ***************************

// let person = {
//   name:"Angel",
//   lastName:'Hernandez',
//   age: 29
// }
//
// let arr = [1,2,3,4,5,6,7,8];
//
// for (let objj of arr) {
//
//     console.log(objj);
// }

// var text = "";
//
// for (var obj in person) {
//
//   text += person[obj];
//   console.log(obj);
//   // if (object.hasOwnProperty(person)) {
//   //
//   // }
// }
// console.log(text);


// *******************************
// // Cookies / sessionStorage and localStorage
// *******************************

// localStorage.setItem('breakfast', 'granola');
//
// console.log(localStorage.getItem('breakfast'));
//
// localStorage.removeItem('breakfast');
//
// localStorage.clear();
//
//
// document.cookie = "Hello=true";
//
// document.cookie = 'DoSomehting=true expires=Fri, 31 Dec 2018 23:00,00 GMT';

// *******************************
// // BinarySearch
// *******************************

// function binarySearch(numArray, key) {
//   var middleIdx = Math.floor(numArray.length / 2);
//   var middleElem = numArray[middleIdx];
//
//   if (middleElem === key) {
//     return true;
//   }e
//
//   console.log(middleElem);
// }
//
// binarySearch([5,7,12,16,36,39,42,56,71], 56);
//


// *******************************
// // Factorial Function Recursion
// *******************************

// function factorial(num) {
//   if (num === 1) {
//     // Base Case
//     return num;
//
//   }else{
//     // Recursive case
//   return  num * factorial(num -1);
//   // 2 * 1 = 2
//   // 3 * 2 = 6
//   // 4 * 6 = 24
//   }
// }
//
// console.log(factorial(4));




// removeDuplicate([1,3,3,3,1,5,6,7,8,1]);


// function convertHTML(str) {
//   // Split by character to avoid problems.
//
//
//   var temp = str.split('');
//
//
//   for (var i = 0; i < temp.length; i++) {
//
//     switch (temp[i]) {
//       case '<':
//         temp[i] = '&lt;';
//         break;
//       case '&':
//         temp[i] = "&amp;";
//         break;
//       case '>':
//         temp[i] = '&gt;';
//         break;
//       case '"':
//         temp[i] = '&quot;';
//         break;
//       case "'":
//         temp[i] = '&apos';
//         break;
//     }
//
//   }
//
//   temp = temp.join('');
//
//   return temp
//
// }

//test here
// convertHTML("Dolce & Gabbana");
  // Create variables to be used
  // var pigLatin = '';
  // var regex = /[aeiou]/gi;
  //
  // // Check if the first character is a vowel
  // if (str[0].match(regex)) {
  //   pigLatin = str + 'way';
  //
  // } else {
  //
  //   // Find how many consonants before the first vowel.
  //   var vowelIndice = str.indexOf(str.match(regex)[0]);
  //
  //   // Take the string from the first vowel to the last char
  //   // then add the consonants that were previously omitted and add the ending.
  //   pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  // }
  //
  // return pigLatin;
// }

// test here
// translatePigLatin("consonant");



// *******************************
// Search and Replace
// *******************************

// function myReplace(string, before, after) {
//   var index =  string.indexOf(before);
//
//   if (string[index] === string[index].toUpperCase() ) {
//     console.log('There is an uppercase');
//
//     after = after.charAt(0).toUpperCase() + after.slice(1) ;
//     // console.log(after);
//
//   }
//
//   string = string.replace(before, after);
//
//   console.log(string);
//
//   return string
//
// }
//
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("His name is Tom", "Tom", "john")


// *******************************
// Sum of two
// *******************************



// *******************************
// Remove Duplicate
// *******************************

// function removeDuplicate(arr){
//
//      var seen = {};
//
//      return arr.filter(function(item) {
//          return seen.hasOwnProperty(item) ? false : (seen[item] = true);
//      });
//
//      console.log(seen);
//
// }

// removeDuplicate([1,3,3,3,1,5,6,7,8,1]);


// function removeDuplicate(arr){
//
//   var x = arr.filter(function(item, pos) {
//
//       return arr.indexOf(item) == pos;
//   })
//   console.log(x);
// }
//
// removeDuplicate([1,3,3,3,1,5,6,7,8,1]);


// function removeDuplicate(arr){
//
//   var uniq = [...new Set(arr)];
//
//   console.log(uniq);
// }
//
// removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
//
//



// function removeDuplicate(arr){
//
//   var uniq = [...new Set(arr)];
//
//   console.log(uniq);
// }
//
// removeDuplicate([1,3,3,3,1,5,6,7,8,1]);


// function removeDuplicate(arr) {
//   var exist = {},
//       outArr = [],
//       elm;
//
//   for (var i = 0; i < arr.length; i++) {
//     elm = arr[i];
//
//     if (!exist[elm]) {
//       outArr.push(elm);
//       exist[elm]= true;
//     }
//   }
//
// }
//
// removeDuplicate([1,3,3,3,1,5,6,7,8,1,3]);

// *******************************
// Flattened an Array
// *******************************

// var flattened = [[0, 1], [2, 3], [4, 5]];
// var result = flattened.reduce(function(a, b) {
//   return a.concat(b);
// });
// console.log(result);

// *******************************
// charAt() split()
// *******************************


// var input = 'name |desuglify |uppercase';
//
// var sections = input.split("|").map(function(element) {
//
//     var result = element.trim();
//
//     return result.charAt(0).toUpperCase() + element.slice(1)
// })
//
// console.log(sections);


// console.log(family.indexOf('kittie') > -1 );


// var names = 'shane osburne';
//
// var upper = names.split(' ').map(function(value) {
//         return value.charAt(0).toUpperCase() + value.slice(1)
//       }).join(' ');
//
// console.log(upper);
//
// var a = ['zero', 'one', 'two', 'three'];
// var sliced = a.slice(1, 3);
//
// console.log(sliced);
// var input = [
//   {
//     title: "Batman Begins",
//     year: 2005,
//     cast: [
//       'Chirstian Bale',
//       'Michael Caine',
//       'Katie Holmes',
//       'Gari Oldman',
//       'Cilian Murphy'
//     ]
//   },
//   {
//     title: "Dark night rises",
//     year: 2005,
//     cast: [
//       'Chirstian Bale',
//       'Michael Caine',
//       'Ja Holmes',
//       'Gari Oldman',
//       'Cilian Murphy'
//     ]
//   },
//   {
//     title: "Dark Knight",
//     year: 2005,
//     cast: [
//       'Chirstian Bale',
//       'Michael Caine',
//       'Katie Holmes',
//       'Gari Oldman',
//       'Cilian Murphy'
//     ]
//   },
// ];
//
// var stars = input.reduce(function(acc, current) {
//   current.cast.forEach(function(value) {
//     // If it's not in the accumulator
//     if( acc.indexOf(value) === -1){
//       acc.push(value);
//     }
//   })
//
//   return acc
//   // return acc.concat(current.cast)
//
// }, [])
//
// console.log(stars);

// *******************************
// Object list example
// *******************************


// const users = [
//   {name: 'Michael', id: 19, gender:'male', friends: [2, 34, 2, 34]},
//   {name: 'Sarah', id: 2, gender:'female', friends: [4,]},
//   {name: 'Kyle', id: 1, gender:'male', friends: [2, 334]},
//   {name: 'Annah', id: 90, gender:'female', friends: [24]},
//   {name: 'Andres', id: 43, gender:'male', friends: [2,33]},
//   {name: 'John', id: 32, gender:'male', friends: [15]},
//   {name: 'Albert', id: 21, gender:'male', friends: [43,23]},
//   {name: 'John', id: 22, gender:'male', friends: [7,90]},
//   {name: 'Jeff', id: 55, gender:'male', friends: [29,33]}
// ];



// *******************************
// Interviews
// *******************************

// key value pair
// ordinal value =>
// Encode




// *******************************
// sumAll
// *******************************

// function sumAll(arr) {
//
//     var max = Math.max(arr[0], arr[1]);
//     var min = Math.min(arr[0], arr[1]);
//     var temp = 0;
//
//     console.log(
//       "Max is:  " + max + " " +
//       "Min is:  " + min
//     );
//
//     for (var i=min; i <= max; i++){
//         temp += i;
//         console.log(i);
//     }
//     console.log("temp is " + temp);
//   return(temp);
// }
//
// // sumAll([1, 4]);
// sumAll([5, 10])



// *******************************
// Recursion
// *******************************


// function factorialize(num) {
//   if (num === 0){
//     return 1;
//   }
//   return num * factorialize(num -1 );
// }
//
// // 5 4 3 2 1 0
// factorialize(5);

//
// let categories = [
//   { id: 'animals', parent: null },
//   { id: 'mammals', parent: 'animals'},
//   { id: 'cats', parent: 'mammals'},
//   { id: 'dogs', parent: 'mammals'},
//   { id: 'chihuahua', parent: 'dogs'},
//   { id: 'labrador', parent: 'dogs'},
//   { id: 'persian', parent: 'cats'},
//   { id: 'siamese', parent: 'cats'}
// ];
//
// let makeTree = (categories, voids) => {
//
//   let node = {};
//
//   categories
//     .filter( c =>{
//         console.log(c.parent === voids);
//         return c.parent === voids
//         // if it returns true the loop is going to finish
//       }
//     )
//     .forEach( c =>
//       node[c.id] = makeTree(categories, c.id)
//     )
//
//       return node
//
// }
//
//
// console.log(
//   JSON.stringify(
//     makeTree(categories, null)
//   , null, 2)
// );







// *******************************
// Truncate string
// *******************************

// function truncateString(str, num) {
//   if (str.length > num)
//
//   return str.slice(0, num > 3? num - 3 : num) + '...';
//     // return str.slice(0, num > 3 ? num-3 : num) + '...';
//     console.log(str);
//   return str;
// }
//
// truncateString("A-tisket a-tasket A green and yellow basket", 11);
//
//
// function functionName(string) {
//   return string.slice(4 , 6);
// }
//
// functionName('The new color of my Honda is ');

// *******************************
// Confirm the Ending
// *******************************



// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   if(num > 0){
//     return str.repeat(num);
//   }else{
//     return str = 0;
//   }
//   return str;
//
// }
//
// repeatStringNumTimes("abc", 3);
//
// repeatStringNumTimes("abc", -2)


// *******************************
// Confirm the Ending
// *******************************
// function confirmEnding(str, target) {
//
//
//
//   var lo = str.substr(0);
//
//
//   return lo;
//   // console.log(lo);
// }
//
// confirmEnding("Bastian", "n");

// *******************************
// Return Largest Numbers in Arrays
// *******************************

// var logic;
// function largestOfFour(arr) {
//   return arr.map(function(group){
//     return group.reduce(function(prev, current) {
//
//         return (current > prev) ? current : prev;
//       // console.log(logic);
//
//     })
//     // return group.reduce(function(prev, current) {
//     //   return (current > prev) ? current : prev;
//     // });
//   });
// }
//
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// *******************************
// Title Case a Sentence
// *******************************


// function titleCase(str) {
//   var convert = str.toLowerCase().split(' ');
//   var result = convert.map(function(val) {
//
//     var x = val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//
//     return x;
//   })
//     var y = result.join(" ");
//     console.log(y);
  // var convertToArray = str.toLowerCase().split(" ");
  // var result = convertToArray.map(function(val){
  //     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  // });
  // return result.join(" ");
  // console.log(convert);
// }

// titleCase("I'm a little tea pot");

// *******************************
// Find the Longest Word in a String
// *******************************


// function findLongestWord(str) {
//
//   var x = str.split(' ')
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
// console.log(maxLength);
//
// }
//
// findLongestWord("The quick brown fox jumped over the lazy dog");



// *******************************
// Palindrome
// *******************************
//
// function isPalindrome(string) {
//   string = string.toLowerCase();
//   var characterArr = string.split('');
//   var validCharacters = 'abcdfghijkmlnopqrstuvwxyz'.split('');
//
//   var lettersArr = [];
//
//   characterArr.forEach( char => {
//     // Use indexOf for the conditional
//     if(validCharacters.indexOf(char) > -1){
//       // Push the element into the array
//       lettersArr.push(char);
//     }
//   });
//
//   if(lettersArr.join('') === lettersArr.reverse().join('')){
//     return true
//   }else {
//     return false
//   }
//
// }
//
// isPalindrome('Hello');
// isPalindrome('How are you doing today?');


// oneway.split("").reverse().join("");

// function rev(str) {
//
//   var mystring = str.reverse().join('');
//
//   console.log(mystring);
//
//
// }
//
// rev(['h','e','l','l','o']);


// IndexOf

//
// function vegetables(veggies, veggie) {
//   // If it doesn't exist
//   if (veggies.indexOf(veggie) === -1) {
//       veggies.push(veggie);
//       console.log('New veggies collection is: ' + veggies);
//   }else if (veggies.indexOf(veggie) > -1) {
//     console.log(veggie + " already exist in the veggie collection");
//   }
// }
//
// var veggies = ['potato','tomato', 'chilies', 'green pepper'];
//
// var x = veggies.indexOf('chilies');
//
//
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Apple");
//
// var indeces = [];
// var array = ['a','b','c','a','d'];
// var element = 'a';
//
// var idx = array.indexOf(element);
//
// while(idx != -1){
//   indeces.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(a);
// console.log(indeces);


// *******************************
// Recursion and looping
// *******************************


// var counter = 10;
// while(counter > 0) {
//     console.log(counter--);
// }
//


// var factor = function(number) {
//   var result = 1;
//   var count;
//   for (count = number; count > 1; count--) {
//     result *= count;
//   }
//   return result;
// };
// console.log(factor(6));



// 720


// *******************************
// Reverse string
// *******************************

// var selector = document.getElementById('content');
//
// function reverseString(str) {
//   str.split(' ');
//
//
//   var arr = [];
//
//   for (var i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//
//   }
//   var reverse = arr.reverse();
//   var final = reverse.join('')
//   console.log(final);
// }
//
// reverseString("hello");
//



// *******************************
// RansonNote
// *******************************

// function harmlessRansomNote(noteText, magazineText) {
//   var noteArr = noteText.split(' ');
//   var magazineArr = magazineText.split(' ');
//   var magazineObj = {};
//
//   magazineArr.forEach(word =>{
//     if(!magazineObj[word]){
//       magazineObj[word]=0;
//       magazineObj[word]++;
//       // console.log([word]);
//     }
//   });
//
//   var noteIsPossible = true;
//
//   noteArr.forEach(word =>{
//     if (magazineObj[word]) {
//       magazineObj[word]--;
//       console.log(magazineObj[word]--);
//
//       if (magazineObj[word] < 0)  {
//         noteIsPossible = false;
//         console.log([word]);
//
//       }
//     }else{
//       noteIsPossible = false;
//     }
//
//   });
//
//   return noteIsPossible;
//
// }
//
// harmlessRansomNote('ha this is the magazine text hhh', 'ha this is the magazine text this is the text of the note');
//

// ** split();

// *******************************
// FizzBuzz
// *******************************

// function FizzBuzz(num) {
//   for(var i = 1; i <= num; i++){
//
//     if (i % 15 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz ' + i);
//     }else if (i % 3 === 0 ){
//       console.log('fizz ' + i);
//     }else if (i % 5 === 0) {
//       console.log('Buzz ' + i);
//     }
//   }
// }
//
// FizzBuzz(30);
