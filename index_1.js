// 1.1 Заполнить массив 20 числами, которые делятся на 3 или на 5, или на 15, и вывести его.

console.log(`Задание 1.1`);

const a = [];

for (let i = 0; a.length < 20; i += 1) {
  if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
    a.push(i);
  }
}

for (let i = 0; i < a.length; i += 1) {
  console.log(`a[${i}] = ${a[i]}`);
}

// 1.2 Посчитать произведение всех элементов находящихся в каждой третьей позиции.

console.log(`Задание 1.2`);

let product = 1;

for (let i = 2; i < a.length; i += 3) {
  product *= a[i];
}

console.log(`Произведение элементов каждой третьей позиции = ${product}`);

// 1.3 Посчитать среднее арифметическое всех чисел.

console.log(`Задание 1.3`);

let sum = 0;

for (let i = 0; i < a.length; i += 1) {
  sum += a[i];
}

const avarage = sum / a.length;

console.log(`Среднее арифметическое всех чисел массива = ${avarage}`);

// 1.4 Найти максимальное и минимальное число.

console.log(`Задание 1.4`);

let max = a[0];
let min = a[0];

for (let i = 1; i < a.length; i += 1) {
  if (max < a[i]) {
    max = a[i];
  }
}

for (let i = 1; i < a.length; i += 1) {
  if (min > a[i]) {
    min = a[i];
  }
}

console.log(`Максимальное число в массиве - ${max}`);
console.log(`Минимальное число в массиве - ${min}`);
