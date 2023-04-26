interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

type PersonProtocol2<T, U> = {
  name: T;
  lastName: T;
  age: U;
}

const person: PersonProtocol<string, number> = {
  name: 'Johnny',
  lastName: 'Silverhand',
  age: 89,
};

const person2: PersonProtocol2<number, number> = {
  name: 47,
  lastName: 456,
  age: 30,
};

const person3: PersonProtocol = {
  name: 'Johnny',
  lastName: 'Silverhand',
  age: 89,
};

console.log(person, person2, person3);
