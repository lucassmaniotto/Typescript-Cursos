function decorator(classPrototype: any, name: string | symbol): any {
  let propertyValue: any;
  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

export class Person {
  @decorator
  name: string;
  @decorator
  lastName: string;
  @decorator
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

  method(msg: string): string {
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
