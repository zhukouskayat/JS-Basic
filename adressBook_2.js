/* eslint-disable no-console */

const Roles = {
  User: "user",
  Admin: "admin",
  Manager: "manager",
};

function Person(firstName, lastName, birthDate = new Date(1990, 5, 15)) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDate = birthDate;

  this.calculateAge = function () {
    const today = new Date();
    let years = today.getFullYear() - this.birthDate.getFullYear();
    const month = today.getMonth() < this.birthDate.getMonth();
    const day = today.getDate() < this.birthDate.getDate();
    const date = today.getMonth() === this.birthDate.getMonth() && day;
    const calculateDate = month || date ? years -= 1 : years;
    return calculateDate;
  };

  this.calculateYearsUntilRetirement = function (ageOfRetirement = 65) {
    const yearsUntilRetirement =
      this.calculateAge() >= ageOfRetirement ?
      0 :
      ageOfRetirement - this.calculateAge();
    return yearsUntilRetirement;
  };

  this.print = function () {
    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Date of Birth: ${this.birthDate}`);
    console.log(`Age: ${this.calculateAge()}`);
  };
}

function Employee(person, role) {
  this.person = person;
  this.role = role;

  this.printRole = function () {
    switch (this.role) {
      case Roles.User:
        console.log(`* General User *`);
        break;

      case Roles.Admin:
        console.log(`# Administrator #`);
        break;

      case Roles.Manager:
        console.log(`<* Line Manager *>`);
        break;

      default:
        console.log(`-= Unknown Role =-`);
        break;
    }
  };

  this.print = function () {
    this.person.print();
    this.printRole();
  };
}

const addressBook = [
  new Employee(new Person("John", "Doe", new Date(1970, 7, 8)), Roles.User),
  new Employee(new Person("Jane", "Doe", new Date(2001, 6, 19)), Roles.User),
  new Employee(
    new Person("Neo", "Anderson", new Date(1980, 9, 7)),
    Roles.Admin
  ),
  new Employee(new Person("Trinity", "Anderson"), Roles.Manager),
];

addressBook.forEach((employee) => employee.print());