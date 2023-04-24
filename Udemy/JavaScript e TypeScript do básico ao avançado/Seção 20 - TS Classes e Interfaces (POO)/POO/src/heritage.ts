export class Person {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string
  ) {}

  getAge(): number {
    return this.age;
  }

  getCPF(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

export class Student extends Person {
  getFullName(): string {
    return `Is ${this.name} ${this.surname} a student?`;
  }
}

export class Client extends Person {
  getFullName(): string {
    return `Is ${this.name} ${this.surname} a client?`;
  }
}

const person = new Person('John', 'Wick', 30, '000.000.000-00');
const student = new Student('Neo', '???', 30, '000.000.000-00');
const client = new Client('Johnny', 'Silverhand', 30, '000.000.000-00');

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
