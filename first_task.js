/* eslint-disable no-console */

// 1. Найти расстояние между двумя точками

console.log(`Задание 1.`)

const x1 = 3;
const y1 = -4;

const x2 = -6;
const y2 = 5;

const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

console.log(`Расстояние между точками (${x1}; ${y1}), (${x2}; ${y2}) равно: ${distance}`);

// 2. Даны 3 числа. Убедиться, что они удовлетворяют теореме Пифагора.

console.log(`Задание 2.`)

const a = 3;
const b = 4;
const c = 5;

const theorem1 = a ** 2 === b ** 2 + c ** 2;
const theorem2 = b ** 2 === a ** 2 + c ** 2;
const theorem3 = c ** 2 === a ** 2 + b ** 2;

const PythagoreanTheorem = theorem1 || theorem2 || theorem3;

const action1 = PythagoreanTheorem ? "удолетворяют" : "не удовлетворяют";

console.log(`Числа ${a}, ${b}, ${c} ${action1} теореме Пифагора`)

// if ((a ** 2 === b ** 2 + c ** 2) || (b ** 2 === a ** 2 + c ** 2) || (c ** 2 === a ** 2 + b ** 2)) {
//     console.log(`Числа ${a}, ${b}, ${c} удовлетворяют теореме Пифагора.`)
// } else {
//     console.log(`Числа ${a}, ${b}, ${c} не удовлетворяют теореме Пифагора.`)
// };

// 3. Даны 3 числа. Убедиться, что они могут являться сторонами треугольника.

console.log(`Задание 3.`)

const d = 1;
const e = 1;
const f = 11;

const check1 = d + e > f;
const check2 = e + f > d;
const check3 = f + d > e;

const triangle = check1 && check2 && check3;

const action2 = triangle ? "могут" : "не могут";

console.log(`Числа ${d}, ${e}, ${f} ${action2} являться сторонами треугольника`)

// if ((d + e > f) && (d + f > e) && (e + f > d)) {
//     console.log(`Числа ${d}, ${e}, ${f} могут являться сторонами треугольника.`)
// } else {
//     console.log(`Числа ${d}, ${e}, ${f} не могут являться сторонами треугольника.`)
// };