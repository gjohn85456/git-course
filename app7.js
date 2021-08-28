// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }
// function test(fn) {
//   return fn(4);
// }
// let a = inBetween(3, 6);

// console.log(test(inBetween(3, 6)));
// let arr = [1, 2, 3, 5, 5, 6, 7];
// //console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// //alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// //alert(arr.filter(inArray([1, 2, 10]))); // 1,2

const arr = [10, 13, 15, 21];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout((function (i) {
//     return function () {
//       console.log("Indexx: " + i + " element: " + arr[i]);
//     };
//   })(i), 1000);
// }

for (var i = 0; i < arr.length; i++) {
  setTimeout(function (index) {
    console.log("Index: " + index + " element: " + arr[index]);
  }, 1000, i);
}
