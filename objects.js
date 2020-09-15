/* eslint-disable no-console */

// 1. Найти расстояние между двумя точками

const point1 = {
  x: 3,
  y: -4,
};

const point2 = {
  x: -6,
  y: 5,
};

const getDistance = (x1, y1, x2, y2) =>
  Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

const showResult = (x1, y1, x2, y2, d) =>
  console.log(
    `Расстояние между точками (${x1}, ${y1}), (${x2}, ${y2}) равно ${d}`
  );

const distance = getDistance(point1.x, point1.y, point2.x, point2.y);
showResult(point1.x, point1.y, point2.x, point2.y, distance);

// 2. Даны 3 числа. Убедиться, что они удовлетворяют теореме Пифагора.

const sides = {
  a: 3,
  b: 4,
  c: 5,
};

const getPythagoreanTheorem = (a, b, c) => {
  const pt1 = a ** 2 === b ** 2 + c ** 2;
  const pt2 = b ** 2 === a ** 2 + c ** 2;
  const pt3 = c ** 2 === a ** 2 + b ** 2;
  const theorem = pt1 || pt2 || pt3;
  return theorem;
};

const showResultTheorem = (a, b, c, theorem) => {
  const t = theorem ? "удолетворяют" : "не удовлетворяют";
  console.log(`Числа ${a}, ${b}, ${c} ${t} теореме Пифагора`);
};

const PythagoreanTheorem = getPythagoreanTheorem(sides.a, sides.b, sides.c);
showResultTheorem(sides.a, sides.b, sides.c, PythagoreanTheorem);

// 3. Даны 3 числа. Убедиться, что они могут являться сторонами треугольника.

const triangleSides = {
  a: 3,
  b: 4,
  c: 5,
};

const getTriangle = (a, b, c) => {
  const check1 = a + b > c;
  const check2 = b + c > a;
  const check3 = c + a > b;
  const check = check1 && check2 && check3;
  return check;
};

const showResultTriangle = (a, b, c, check) => {
  const t = check ? "могут" : "не могут";
  console.log(`Числа ${a}, ${b}, ${c} ${t} являтьcя сторонами треугольника`);
};

const triangle = getTriangle(triangleSides.a, triangleSides.b, triangleSides.c);
showResultTriangle(triangleSides.a, triangleSides.b, triangleSides.c, triangle);
