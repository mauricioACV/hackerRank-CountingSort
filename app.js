import { testCase } from "./data.js";

// *******************************************************************
// ***********************SOLUCION DEFINITIVA*************************
// *******************************************************************
console.clear();
console.log("******* SOLUCION *******");

function countingSort(arr) {
  let newArr = new Array(100);
  newArr = [...newArr].map((x) => 0);
  for (let i = 0; i <= arr.length; i++) {
    newArr[arr[i]] = newArr[arr[i]] + 1;
  }
  return newArr;
}

const frecuencyNumTestCase = countingSort(testCase);

console.log("SOLUCION", frecuencyNumTestCase);

// *******************************************************************
// ***********************SOLUCION DEFINITIVA*************************
// *******************************************************************

// ARRAY DE PRUEBA

const arr = [1, 1, 3, 2, 1];

// *******************************************************************
// ***********************BUSCANDO SOLUCION 1*************************
// *******************************************************************

console.log("******* buscando solucion 1 *******");

function countingSortTest(arr) {
  const max = Math.max(...arr);
  let newArr = new Array(max + 1);
  let strSortArr = "";
  newArr = [...newArr].map((x) => 0);
  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] = newArr[arr[i]] + 1;
  }
  newArr.forEach((item, index) => {
    if (item > 0) {
      strSortArr += `${index},`.repeat(item);
    }
  });
  return strSortArr.split(",", arr.length).map((x) => parseInt(x, 10));
}

const sortArray = countingSortTest(arr);

console.log("array de prueba ordenado", sortArray);

// *******************************************************************
// ***********************BUSCANDO SOLUCION 2*************************
// *******************************************************************

console.log("******* buscando solucion 2 *******");
console.log(Math.max(...arr));
console.log(Math.min(...arr));

const max = Math.max(...arr);
let newArr = new Array(max + 1);
newArr = [...newArr].map((x) => 0);

for (let i = 0; i < arr.length; i++) {
  console.log("index", i);
  console.log("valor", arr[i]);
  newArr[arr[i]] = newArr[arr[i]] + 1;
}

let str = "";
newArr.forEach((item, index) => {
  if (item > 0) {
    console.log(index, item);
    str += `${index},`.repeat(item);
  }
});
console.log(
  "items ordenados",
  str.split(",", arr.length).map((x) => parseInt(x, 10))
);
console.log("conteo", newArr);
