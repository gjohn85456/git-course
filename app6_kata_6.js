let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
let c = [121, 14641, 20736, 361, 25921, 3611, 20736, 361];
let a1 = [121, 144, 19, 161, 19, 144, 19, 11, 1008];
let b1 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
let a2 = [];
let b2 = null;

function comp(array1, array2) {
  console.log(array1);
  console.log(array2);
  if (array1 === null && array2 === null) return true;
  if (array1 != null) {
    if (array1.length === 0 && array2 === null) return false;
  }
  if (array2 != null) {
    if (array2.length === 0 && array1 === null) return false;
  }
  if (array2.length === 0 && array1.length === 0) return true;
  if (array2.length != array1.length) return false;
  if (array1.length != null && array2 != 0) {
    let array1Multiplicities = array1.map((element) => element * element);
    array1Multiplicities.sort();
    array2.sort();
    console.log(array1Multiplicities);
    console.log(array2);
    if ("" + array1Multiplicities === "" + array2) return true;
    else return false;
  }
}
console.log(comp(a2, b2));
