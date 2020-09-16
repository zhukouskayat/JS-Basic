/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

const createPerson = (fn, ln, mn, ag) => ({
  firstName: fn,
  lastName: ln,
  middleName: mn,
  age: ag,
});

const generatePeople = () => {
  return [
    createPerson(`Poppy`, `Florence`, `Yang`, 45),
    createPerson(`Frederick`, `Owain`, `Watson`, 22),
    createPerson(`Bella`, `Katy`, `Leonard`, 18),
    createPerson(`Niall`, `Jac`, `Gordon`, 67),
    createPerson(`Lola`, `Rachel`, `Banks`, 21),
    createPerson(`Jim`, `Brian`, `Whittle`, 43),
    createPerson(`Meghan`, `Caitlyn`, `Smyth`, 28),
    createPerson(`Christopher`, `Gary`, `James`, 32),
    createPerson(`Daniella`, `Antonia`, `Mcdaniel`, 91),
    createPerson(`Mark`, `Jimmy`, `Drake`, 15),
  ];
};

const comparePeple = (a, b) => {
  if (a.firstName === b.firstName) {
    if (a.middleName === b.middleName) {
      return a.lastName <= b.lastName ? -1 : 1;
    }
    return a.middleName < b.middleName ? -1 : 1;
  }
  return a.firstName < b.firstName ? -1 : 1;
};

const sortArray = (a, compare, direction = 1) => {
  for (let i = 0; i < a.length - 1; i += 1) {
    for (let j = 0; j < a.length - 1; j += 1) {
      if (compare(a[j], a[j + 1]) === direction) {
        const t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
      }
    }
  }
};

const people = generatePeople();

sortArray(people, comparePeple, 1);

console.log(people);