function decorator(
  classPrototype: any,
  nameMethod: string,
  propertyDescriptor: PropertyDescriptor
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(propertyDescriptor);
  return {
    writable: false,
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

export class Person {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  @decorator
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

const person = new Person('John', 'Wick', 20);
const method = person.method("I'm back!");
console.log(method);
