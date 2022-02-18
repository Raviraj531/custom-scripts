//=======largest number in an array=========//
function largestNumber() {
  console.log(Math.max(...[1, 2, 3]));
  //--another method
  var a = [1, 2, 3];
  var largest = a[0];
  a.forEach((key) => {
    if (largest < a[key]) {
      largest = a[key];
    }
    return largest;
  });
  console.log(largest);
}
// largestNumber()

//========Celsius to Faranheat========//
function CTOF(Celsius) {
  var F = (Celsius * 9) / 5 + 32;
  console.log('Faranheat', F);
}
// CTOF(37.0);

//========Faranheat to Celsius=========//

function FTOC(Faranheat) {
  var C = ((Faranheat - 32) * 5) / 9;
  console.log('Celsius', C);
}
// FTOC(98.4);

//=====Factorialize=======5*4*3*2*1=120//
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
// console.log('factorial', factorialize(5));

//=======Reverse a string same logic for check polindrome====//
function Reverse(str) {
  str = str.split('').reverse().join('');
  console.log(str);
}
// Reverse('Hello');

//==========Empty an array 3 methods===========//
function Emptyarray() {
  var array1 = [1, 22, 24, 46];
  array1 = [];
  array1.length = 0;
  while (array1.length > 0) {
    array1.pop();
  }
  array1.splice(0, array1.length);
}
// Emptyarray();

//=========type=======//
function logic1() {
  (function () {
    var a = (b = 3);
  })();

  console.log(typeof a);
  console.log(typeof b);
}
// logic1();

//======logic========//
//=======this will print 5 5 5 5 5==//
function logic2() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  //if we nedd 0 1 2 3 4 //
  for (var i = 0; i < 5; i++) {
    (function (x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    })(i);
  }
  // using let method==/
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log('let', i);
    }, i * 1000);
  }
}
// logic2()

//====Logics====//
function logic3() {
  console.log('84', typeof NaN === 'number'); // logs "true"

  console.log('86', NaN === NaN); // logs "false"

  console.log(0.1 + 0.2); //0.3000000004

  console.log(0.1 + 0.2 == 0.3); //false

  console.log([]); //[]

  console.log(1 + []); // “1”

  console.log([] + []); //””;

  console.log([] == []); //false
}
// logic3()
//======================//
function logic4() {
  let x = 4;
  y = x++;
  console.log(x, y);
}
// logic4();

//===========================//
function logic5() {
  var x;
  if (x > 20) {
    x = 50;
  }
  console.log(x);
}
// logic5();
//===========How would you check if a number is an integer===========//
function isInt(num) {
  return num % 1 === 0;
}
// console.log(isInt(4)); // true
// console.log(isInt(12.2)); // false
// console.log(isInt(0.3)); // false

//==Given two strings, return true if they are anagrams of one another==//
function isAnagram(first, second) {
  //An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are anagram of each other.

  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split('').sort().join('');
  b = b.split('').sort().join('');

  return a === b;
}
console.log(isAnagram('Mary', 'Army'));

//==================//
//below code would give output 1undefined. If condition statement evaluate using eval so eval(function f() {}) which return function f() {} which is true so inside if statement code executes. typeof f return undefined because if statement code executes at run time, so statement inside if condition evaluated at run time.
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

//================logic=======//
var foo = 'outside';
function logIt() {
  console.log(foo);
  var foo = 'inside';
}
logIt();

//=================logic==============//
function logic6() {
  a = 2;
}
logic6();
console.log(a);
//==========Logic===========
let arr = [1, 2];
function logic7(array) {
  array = [1, 2, 3];
}
logic7(arr);
console.log(arr);
