export class Person {
  static defaultAge = 0;
  static defaultCpf = '000.000.000-00';

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public cpf: string
  ) {}

  static createPerson(name: string, surname: string): Person {
    return new Person(name, surname, Person.defaultAge, Person.defaultCpf);
  }
}

const person = new Person('John', 'Wick', 30, '000.000.000-00');
person.cpf = '111.111.111-11';
console.log(person);

const person2 = Person.createPerson('Johnny', 'Silverhand');
console.log(person2);
