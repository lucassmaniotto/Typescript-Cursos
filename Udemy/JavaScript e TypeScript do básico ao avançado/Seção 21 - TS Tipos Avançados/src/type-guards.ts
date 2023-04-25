// Type Guards
// Estruturas de condição que permitem a verificação do tipo de uma variável

// typeof -> verifica o tipo de uma variável
export function add (a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return `${a}${b}`;
  }
  return 'Não é possível somar';
}

console.log(add(1, 5));
console.log(add('a', 'b'));
console.log(add(1, 'a'));

console.log('------------------')

// instanceof -> verifica se um objeto é uma instância de uma classe
type Person = { name: string }
type Animal = { color: string }
type PersonOrAnimal = Person | Animal

export class Student implements Person {
  constructor(public name: string) {}
}

export class Dog implements Animal {
  constructor(public color: string) {}
}

function showName (object: PersonOrAnimal): void {
  if (object instanceof Student) {
    console.log(object.name);
  } else if (object instanceof Dog) {
    console.log(object.color);
  } else {
    console.log(`${object} não é um objeto válido`);
  }
}

showName(new Student('Maria'));
showName(new Dog('Black'));
showName({ name: 'João' });
