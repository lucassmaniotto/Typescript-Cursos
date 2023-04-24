interface Person {
  name: string;
}

interface Person {
  lastName: string;
}

const person: Person = {
  name: 'John',
  lastName: "Wick"
};

console.log(person.name + ' ' + person.lastName);
