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

  console.log('typeof a', typeof a);
  console.log('typeof b', typeof b);
}
// logic1();

//======logic========//
//=======this will print 5 5 5 5 5==//
function logic2() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log('normal var', i);
    }, 1000);
  }
  //if we nedd 0 1 2 3 4 //
  for (var i = 0; i < 5; i++) {
    (function (x) {
      setTimeout(function () {
        console.log('function var', x);
      }, 1000);
    })(i);
  }
  // using let method==/
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log('let', i);
    }, 1000);
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
// console.log(isAnagram('Mary', 'Army'));

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
  console.log('foo', foo);
  var foo = 'inside';
}
// logIt();

//=================logic==============//
function logic6() {
  a = 2;
}
// logic6();
// console.log(a);
//==========Logic===========
let arr = [1, 2];
function logic7(array) {
  array = [1, 2, 3];
}
// logic7(arr);
// console.log(arr);
//=============logic==============//
console.log(2 + '2');
console.log(2 - '2'); // '-' symbol will work even with strings

//=============arrow functions scope==========//
function logic8() {
  const obj = {
    x: 10,
    y: 20,
    sum: () => this.x + this.y,
    multiply: function () {
      return this.x * this.y;
    },
  };

  console.log('sum' + obj.sum());
  console.log(obj.multiply());
}
// logic8()

//==========promise setTimeout===========
function logic9() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('rejected');
    }, 3000);
  });

  async function asyncFunc() {
    const result = await promise;
    console.log(result);
    console.log('hello1');
  }
  asyncFunc();
}
// logic9();

//=============map and filter==========
function logic10() {
  let a = [1, 2, 3, 4, 5, 6];
  let b = a.map((item) => item / 2 == 0);
  let c = a.filter((item) => item / 2 == 0);
  console.log(b, c);
}
logic10();

//============compare dates===========

function compareDates() {
  var d1 = new Date('2022-01-21');
  var d2 = new Date();
  console.log(d1.getTime() === d2.getTime());
}
// compareDates();

//============compare Arrays=======
function CompareArrays() {
  var array1 = [2, 3, 1, 4];
  var array2 = [1, 2, 3, 4];
  console.log(array1.toString() === array2.toString());
  //++++or++++
  var isSame =
    array1.length === array2.length &&
    array1.sort().every(function (value, index) {
      return value === array2[index];
    });
  console.log('Compare Arrays ' + isSame);
}
// CompareArrays();

//=========find duplicates in Array========
function findDuplicates() {
  const yourArray = [1, 1, 2, 3, 4, 5, 5];
  let duplicates = [];
  const tempArray = [...yourArray].sort();
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i]);
    }
  }
  console.log('duplicates ', duplicates);
}
// findDuplicates();

//==========remove duplicates from Array=======
function removeDuplicates() {
  let array = [1, 2, 3, 1, 2, 3];
  array = [...new Set(array)];
  console.log('removeduplicates with array', array);
  //====without set====//
  array = array.filter(function (item, index, inputArray) {
    return inputArray.indexOf(item) == index;
  });

  let arrayObj = [
    { id: 1, name: 'ravi' },
    { id: 1, name: 'ravi' },
  ];
  // arrayObj = arrayObj.filter(
  //   (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  // );

  // -----------Unique by multiple properties ( id and name )

  arrayObj = arrayObj.filter(
    (v, i, a) =>
      a.findIndex((t) => ['id', 'name'].every((k) => t[k] === v[k])) === i
  );

  console.log('removeduplicates with array of objects', arrayObj);
}
// removeDuplicates();

//Reduce xample

function reduceExample() {
  let arr = [{ a: [1, 2, 3] }, { a: [1, 2, 3] }];
  //need output [1,2,3,1,2,3]
  arr = arr.reduce((x, y) => x.concat(y.a), []);
  console.log('reduce', arr);
}
reduceExample();

function sortArray(arr) {
  var temp = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  }
}

console.log(sortArray([2, 6, 0, 4, 3, 4, 3, 5, 9, 6, 12, 43, 6]));

function Reverse(str) {
  let a = str.split('').reverse().join('');
  console.log(a);
  //Uisng loop
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
}
Reverse('test');

//Matrix diagnoal diffrence
function diagonalDifference(arr) {
  let leftDiagSum = 0;
  let rightDiagSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftDiagSum += arr[i][i];
    rightDiagSum += arr[i][arr[i].length - (i + 1)];
  }
  let sum = Math.abs(leftDiagSum - rightDiagSum);
  return sum;
}
