"use strict"

// *******************************
// Array from
// *******************************

// const bar = ["a", "b", "c"];
// Array.from(bar);
// // ["a", "b", "c"]
//
// Array.from('foo');
// // ["f", "o", "o"]


// *******************************
// Some filters
// *******************************

// var arr = [1,2,3,5,6,7,8];

// arr.some(function(value, index, array) {
//   console.log(value);
//   return value > 4;
// })

// arr.some(function(value, index, array) {
//   // console.log(value);
//   if (value >= 2) {
//     console.log(value + ' ' + index.toString() );
//
//   }
// })


// *******************************
// Filter = True/False
// *******************************

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.
newArray = oldArray.filter(function (val){
  return val >= 5;
})

console.log(newArray);
var newArray = oldArray;


// function onlyFourLetters(arr) {
//   return arr.filter(function(value, index) {
//     // console.log(value.length === 4);
//     return value.length === 4;
//   });
//
// }
//
// onlyFourLetters(['Rusty','Matt','Movie','Colt']);

// var instructors = [
// {name: "Elie"},
// {name: "Tim"},
// {name: "Mat"},
// {name: "Coltts"},
// {name: "Colt"} ];
//
// instructors.filter(function(value, index, array) {
//   return value.name.length > 3;
// });

  // var arr = [1,2,3];
  //
  // var me = arr.filter(function (value, index) {
  //   return value > 2;
  // })
  //
  // console.log(me);

// *******************************
// MAP
// *******************************

// function doubleValues(arr) {
//   return arr.map(function(value) {
//     console.log(value * 1);
//     return value * 2;
//   })
// };
//
// doubleValues([1,2,3]);


// function valTimesIndex(arr) {
//   return arr.map(function(val, idx) {
//     return val * idx;
//   })
// }
//
// valTimesIndex([1,2,3,4,5,6])


// var arr = [1,2,3];
//
// arr.map(function(value,index,array){
//   console.log( value);
//   return value * 2 ;
// });



// *******************************
// FOREACH
// *******************************

// var arr = ["Split","me","into","an","array"];
//
// var newarr = [];
//
// arr.forEach( (object, index)=>{
//
//   newarr.push(object)
//   console.log(object+ index);
//   // setTimeout(function() {
//   //   console.log(object);
//   // }, index * 2000);
// });
//
// console.log(newarr);


// *******************************
// Call Bind and Apply
// *******************************

// constructor
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.wheels = 4
//
//   console.log(this.make);
// }

// // Whith call
// function Motorcycle(make, model, year) {
//
//   Car.call(this, make, model, year);
//
//   this.wheels = 2;
//
// let result = "Car Honda has " + this.wheels ;
// console.log(result);
// }

// // with apply
// function Motorcycle(make, model, year) {
//   Car.apply(this, arguments);
//   this.wheels = 2;
//   let result = "Car Honda has " + this.wheels + " Wheels" ;
//   console.log(result);
// }
//
// function Bike() {
//   Car.bind(this, arguments);
//   this.wheels = 1;
//   let result = " Bike has " + this.wheels + " Wheels" ;
//   console.log(result);
// }
//
//
// // new Motorcycle('honda', 'honda', 1990);
// //
// // new Bike('bije', 'kii', 199);
//
// // Object literal
//
// // function dontkill(action) {
// //   return this.name + " is not going to bite you" + action + ' has ' + this.legs + ' legs';
// // }
//
// function dontkill(action, action2) {
//   return this.name + " is not going to bite you" + action + ' or ' + action2 + ' has ' + this.legs + ' legs';
// }
//
// var Dog1 ={
//   name: "Booboo",
//   legs: 4
// }
//
// var Dog2 ={
//   name: "ChooChoo",
//   legs: 6
// }
//
// var Dog1 ={
//   name: "Booboo",
//   legs: 4
// }
//
// var Dog2 ={
//   name: "ChooChoo",
//   legs: 6
// }

// dontkill.call(Dog1,'bite');
// dontkill.apply(Dog2, ['bite', 'kill']);


// *******************************
// Callbacks
// *******************************

// var years = [1990, 1965, 1963, 2005, 1988];
//
// function arrayCalc(arr, func) {
//   var arrRes = [];
//
//   for (var i = 0; i < arr.length; i++) {
//       arrRes.push(func(arr[i]) );
//       console.log(arr[i]);
//   }
//   return arrRes;
// }
//
// // Callback
// function calculateAge(el) {
//   return 2016 - el;
// }
//
// var x = arrayCalc(years, calculateAge);
//
// console.log(x);



// *******************************
// CLOSURES
// *******************************

// function counter() {
//   var count = 0;
//   return function() {
//     return ++count;
//   }
// }
//
// var c = counter()();


// *******************************
// CLOSURES
// *******************************

//
// function closure() {
//   var data = "Closures are ";
//
//   return function inner() {
//     var innerData = " Awesome";
//     return data + innerData;
//   }
// }
//
// closure()();

// *******************************
// CONSTRUCTORS CALL and APPLY
// *******************************
//
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.wheels = 4
//
//   console.log(this.make);
// }
//
// // // Whith call
// // function Motorcycle(make, model, year) {
// //
// //   Car.call(this, make, model, year);
// //
// //   this.wheels = 2;
// //
// // let result = "Car Honda has " + this.wheels ;
// // console.log(result);
// // }
//
// // // with apply
// function Motorcycle(make, model, year) {
//
//   Car.apply(this, arguments);
//
//   this.wheels = 2;
//
// let result = "Car Honda has " + this.wheels + " Wheels" ;
// console.log(result);
// }
//
//
// new Motorcycle('honda', 'honda', 1990);


// *******************************
//  Global Scope and Functions
// *******************************


// // Declare your variable here
// var myGlobal = 10;
//
// function fun1() {
//   // Assign 5 to oopsGlobal Here
//   oopsGlobal = 5;
// }
//
// // Only change code above this line
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }
//
// fun2();


// *******************************
//  Manipulate Arrays With push
// *******************************



// // Example
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy", "joy"]);
// // ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
//
// // Setup
// var myArray = [["John", 23], ["cat", 2]];
//
// // Only change code below this line.
//
// myArray.push(["dog", 3]);
//


// *******************************
//  Access MultiDimensional Arrays With Indexes
// *******************************



// // Setup
// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
//
// // Only change code below this line.
// var myData = myArray[2][1];



// *******************************
//  Use Bracket Notation to Find the Last Character in a String
// *******************************

// // Example
// var firstName = "Ada";
// var lastLetterOfFirstName = firstName[firstName.length - 1];
//
// // Setup
// var lastName = "Lovelace";
//
// // Only change code below this line.
// var lastLetterOfLastName = lastName[lastName.length - 1];
//



// *******************************
//  Bracket Notation
// *******************************


// // Example
// var firstLetterOfFirstName = "";
// var firstName = "Ada";
//
// firstLetterOfFirstName = firstName[0];
//
// // Setup
// var firstLetterOfLastName = "";
// var lastName = "Lovelace";
//
// // Only change code below this line
// firstLetterOfLastName = lastName[0];
//




// *******************************
// LOOP
// *******************************

// var joinMe = ["Split","me","into","an","array"];
//
// // joinMe.forEach( (object, index)=>{
// //   setTimeout(function() {
// //     console.log(object);
// //   }, index * 2000);
// // });
//
// var y = 'variable';
//
// function test(x) {
//   console.log(x + " is the value and Y is == " + y);
//   function test2() {
//     console.log("hey " + x + y );
//   }
//   test2();
// }
//
// test("hello ");
//
//
// for (var i = 0; i < joinMe.length; i++) {
//
//
//   // (function(index) {
//   //   setTimeout(function () {
//   //     var times  = joinMe[index];
//   //     console.log(times );
//   //   },i * 2000)
//   // })(i)
//   var test = i;
//   var x = "variable X ";
//
//   (function(i, x) {
//
//
//     setTimeout(function() {
//       console.log(joinMe[i]);
//       console.log(x);
//     },i * 2000)
//
//   })(i, x);
// }

// *******************************
// Multi-dimensional Array.
// *******************************

// // Example
// var ourArray = [["the universe", 42], ["everything", 101010]];
//
// // Only change code below this line.
// var myArray = [[["Bulls", 23], ["White Sox", 45]]];


// *******************************
// JOIN arrays
// *******************************

// var joinMe = ["Split","me","into","an","array"];
// var joinedString = '';
//
// // Only change code below this line.
//
// joinedString = joinMe.join(' ');
//
// console.log(joinedString);



// *******************************
// SPLIT arrays
// *******************************

// var string = "Split me into an array";
// var array = [];
//
// // Only change code below this line.
//
// array = string.split(' ');
//
// console.log(array);

// *******************************
// CONCAT arrays
// *******************************

// var elements = [1, 2, 3, 4, 5, 6, 7, 8];
// var elemensPart2 = [9,10,11];
// var newArray;
//
// newArray = elements.concat(elemensPart2)
//
// console.log(newArray);

// *******************************
// REVERSE arrays
// *******************************

// var elements = [1, 2, 3, 4, 5, 6, 7, 8];
//
// console.log(elements);
//
// console.log(elements.reverse());


// *******************************
// NESTED OBJECTS
// *******************************

//
// var person = {
//   firstName: 'Colt',
//
//   sayhi:function() {
//     return "Hi" + this.firstName;
//   },
//   determineContex: function() {
//     return this === person;
//   },
//   dog:{
//     sayHello: function() {
//       return "Hello" + this.firstName;
//     },
//     determineContex: function() {
//       return this === person;
//     }
//   }
// }
//



// *******************************
// CONSTRUCTORS CALL and APPLY
// *******************************

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.wheels = 4
//
//   console.log(this.make);
// }
//
// function Motorcycle(make, model, year) {
//
//   Car.call(this, make, model, year);
//
//   this.wheels = 2;
//
// let result = "Car Honda has " + this.wheels;
// console.log(result);
//
// }
//
// new Car('honda');
//
// new Motorcycle();
//



// *******************************
// PROMISE ASYNC Chaining
// *******************************


// var p1 = new Promise(function(resolve, reject) {
//
//   // resolve([1,2,3,4,5,6]);
//   // reject('ERROR');
//
//   setTimeout(function () {
//     var randomInit = Math.floor(Math.random() * 10)
//     resolve(randomInit)
//     // Show the number
//   }, 4000)
//
// });
//
// p1.then(function(data) {
//   console.log('Random integer passed to resolve ....', data);
//
//   //  Retured a promise inside a resolve
//    return new Promise(function(resolve, reject) {
//      setTimeout(function() {
//        resolve(Math.floor(Math.random() * 10));
//      }, 3000)
//    });
//   //  Chained
// }).then(function(data) {
//   console.log("second random integer was resolved", data);
// });
//

// p1.then(function(arr) {
//   console.log("Promised resolved", arr);
// }).catch(function(data) {
//
//   console.log("promise p1 was rejected with data", data);
//
// })


// *******************************
// PROMISE ASYNC
// // *******************************
//
//
// var p1 = new Promise(function(resolve, reject) {
//
//   setTimeout(function () {
//     var randomInit = Math.floor(Math.random() * 10)
//     resolve(randomInit)
//   }, 4000)
//
// });
//
// p1.then(function(arr) {
//   console.log("Promised resolved", arr);
// }).catch(function(data) {
//
//   console.log("promise p1 was rejected with data", data);
//
// })



// *******************************
// PROMISE
// *******************************


// var p1 = new Promise(function(resolve, reject) {
//
//   // resolve([1,2,3,4,5,6]);
//   // reject('ERROR');
//
//   var num = Math.floor(Math.random() * 100);
//
//   if(num < 50){
//     resolve(num)
//   }else {
//     reject(num)
//   }
//
// });
//
// p1.then(function(arr) {
//   console.log("Promised resolved", arr);
// }).catch(function(data) {
//
//   console.log("promise p1 was rejected with data", data);
//
// })

















// *******************************
// SETINTEVAL
// *******************************

// function countDown(seconds) {
//
//   var setinterval = setInterval(function() {
//     seconds--;
//     if(seconds > 0){
//       console.log("timer: ", seconds);
//     }else {
//       console.log("Ring Ring Ring");
//       clearInterval(setinterval);
//       return "Ring Ring Ring"
//     }
//   }, 1000);
//
// }
//
// countDown(3);

// *******************************
// ARRAYS
// *******************************

// var elements = ['sword', 'laser', 'stick', 'axe'];
// // var elements = [1, 9, 3, 4, 5, 6, 7, 8];
//
// // elements.push('sword', 'laser');
//
// // elements.pop();
//
// // elements.splice(1, 3, 'bomb', 'bow');
//
// function find(age) {
//   return age  === 'stick';
//
// }
//
// let result = elements.findIndex(find);
//
//
// console.log(result);
