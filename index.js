//=======largest number in an array=========//
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

//========Celsius to Faranheat========//
function CTOF(Celsius) {
  var F = (Celsius * 9) / 5 + 32;
  console.log('Faranheat', F);
}
CTOF(37.0);

//========Faranheat to Celsius=========//

function FTOC(Faranheat) {
  var C = ((Faranheat - 32) * 5) / 9;
  console.log('Celsius', C);
}
FTOC(98.4);

//=====Factorialize=======5*4*3*2*1=120//
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
console.log('factorial', factorialize(5));

//=======Reverse a string same logic for check polindrome====//
function Reverse(str) {
  str = str.split('').reverse().join('');
  console.log(str);
}
Reverse('Hello');

//==========Empty an array 3 methods===========//
var array1 = [1, 22, 24, 46];
array1 = [];
array1.length = 0;
while (array1.length > 0) {
  array1.pop();
}
array1.splice(0, array1.length);

//=========type=======//
(function () {
  var a = (b = 3);
})();

console.log(typeof a);
console.log(typeof b);

//======logic========//
//=======this will print 5 5 5 5 5==//
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
//====Logics====//
console.log('84', typeof NaN === 'number'); // logs "true"

console.log('86', NaN === NaN); // logs "false"

console.log(0.1 + 0.2); //0.3000000004

console.log(0.1 + 0.2 == 0.3); //false

console.log([]); //[]

console.log(1 + []); // “1”

console.log([] + []); //””;

console.log([] == []); //false
