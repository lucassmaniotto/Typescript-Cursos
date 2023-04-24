export class Person {
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    private _cpf: string
  ) {}

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }

  getAge(): number {
    return this.age;
  }

  get cpf(): string {
    return this._cpf
  }

  setName(name: string): void {
    this.name = name;
  }

  setSurname(surname: string): void {
    this.surname = surname;
  }

  setAge(age: number): void {
    this.age = age;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const person = new Person('John', 'Wick', 30, '000.000.000-00');
console.log(person.getFullName());
console.log(person.getAge());
console.log(person.cpf);

console.log('\nChanging person data...\n');

person.setName('Johnny');
person.setSurname('Silverhand');
person.setAge(31);
person.cpf = '111.111.111-11';
console.log(person.getFullName());
console.log(person.getAge());
console.log(person.cpf);
