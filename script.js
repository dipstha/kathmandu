class Person {
  constructor(firstName, lastName, email, phoneNumber, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }

  get email() {
    return this._email;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  get age() {
    return this._age;
  }
  set firstName(firstName) {
    this._firstName = firstName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  set email(email) {
    this._email = email;
  }
  set phoneNumber(phoneNumber) {
    this._phoneNumber = phoneNumber;
  }
  set age(age) {
    this._age = age;
  }

  description() {
    newPerson.innerHTML = `Hello, my name is ${this._firstName} ${this._lastName} and I am ${this._age} years old!`;
  }
}

function myFunc() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const age = document.getElementById("age").value;

  const newPerson = new Person(firstName, lastName, email, phoneNumber, age);
  newPerson.description();
}
const newPerson = document.getElementById("contactCustomer");
const btn = document.getElementById("button");

btn.addEventListener("click", myFunc);

// let element = document.getElementById('button');
// element.onclick = function(){
//     onst user1 = new user( 'Pedri', 'Gonzalvez', 'pg08@email.com', 1232343456, 19)

// }
