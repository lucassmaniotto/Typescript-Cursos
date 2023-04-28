function decorator(
  classPrototype: any,
  nameMethod: string | symbol,
  index: number
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
  return 'anything';
}

export class Person {
  name: string;
  lastName: string;
  age: number;

  constructor(
    name: string,
    lastName: string,
    age: number
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' ');
  }
}

const person = new Person('Alan', 'Turing', 30);
const method = person.method('Hello');
console.log(method);
