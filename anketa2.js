/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

const createPerson = {
  person1: {
    firstName: `Poppy`,
    lastName: `Florence`,
    middleName: `Yang`,
    age: 45,
  },
  person2: {
    firstName: `Frederick`,
    lastName: `Owain`,
    middleName: `Watson`,
    age: 22,
  },
  person3: {
    firstName: `Bella`,
    lastName: `Katy`,
    middleName: `Leonard`,
    age: 18,
  },
  person4: {
    firstName: `Niall`,
    lastName: `Jac`,
    middleName: `Gordon`,
    age: 67,
  },
  person5: {
    firstName: `Lola`,
    lastName: `Rachel`,
    middleName: `Banks`,
    age: 21,
  },
  person6: {
    firstName: `Jim`,
    lastName: `Brian`,
    middleName: `Whittle`,
    age: 43,
  },
  person7: {
    firstName: `Meghan`,
    lastName: `Caitlyn`,
    middleName: `Smyth`,
    age: 28,
  },
  person8: {
    firstName: `Christopher`,
    lastName: `Gary`,
    middleName: `James`,
    age: 32,
  },
  person9: {
    firstName: `Daniella`,
    lastName: `Antonia`,
    middleName: `Mcdaniel`,
    age: 91,
  },
  person10: {
    firstName: `Mark`,
    lastName: `Jimmy`,
    middleName: `Drake`,
    age: 15,
  },
};

// Сортировка людей

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

const getPerson = Object.values(createPerson);
sortArray(getPerson, comparePeple, 1);
console.log(getPerson);

// Посчитать средний возраст

const averageAge = () => {
  const avAge = [];
  let sum = 0;
  let count = 0;
  for (let i = 0; i < getPerson.length; i += 1) {
    avAge.push(getPerson[i].age);
    sum += avAge[i];
    count += 1;
  }
  return sum / count;
};

const getAverageAge = averageAge();
console.log(`Средний возраст среди всех людей = ${getAverageAge}`);

// Найти возраст самого молодого и самого старого 

const peopleMaxAge = () => {
  const array = [];
  let max = 0;
  for (let i = 0; i < getPerson.length; i += 1) {
    array.push(getPerson[i].age);
    max = array[i] > max ? array[i] : max;
  }
  return max;
};

const getpeopleMaxAge = peopleMaxAge(createPerson);
console.log(`Возраст самого старого человека равен = ${getpeopleMaxAge}`);

const peopleMinAge = () => {
  const array = [];
  let min = 0;
  for (let i = 0; i < getPerson.length; i += 1) {
    array.push(getPerson[i].age);
    min = array[i] < min ? array[i] : min;
  }
  return min;
};

const getpeopleMinAge = peopleMinAge(createPerson);
console.log(`Возраст самого молодого человека равен = ${getpeopleMinAge}`);