// console.log("hi...")
// var add = (a, b) => a + b;
// console.log(add(8, 8));

// (function () {
//   console.log("function itself only write")
// })();

// call back function

function callback() {
  console.log("amit is calling a callback");
}

const add = function (a, b, callback) {
  console.log(a + b);
  callback();
}
add(8, 8, callback);

// convert jsonString to java script object
const jsonString = '{ "name": "john", "age": 25, "city": "california" }';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);


// convert java script object to json string

const jsObject = { name: "Deo", age: 28, city: "New York" };
const jsonString_two = JSON.stringify(jsObject);
console.log(jsonString_two);
