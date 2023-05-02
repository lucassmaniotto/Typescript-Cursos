namespace MyNamespace {
  export const nameFromNamespace = 'Lucas';

  export class PersonFromNamespace {
    constructor(public name: string) {}
  }

  const personFromNamespace = new PersonFromNamespace('Lucas');
  console.log(personFromNamespace);

  export namespace AnotherNamespace {
    export const nameFromAnotherNamespace = 'Luke';
  }
}

const personFromNamespace = new MyNamespace.PersonFromNamespace('Lucas');
console.log(personFromNamespace);
console.log(MyNamespace.nameFromNamespace);
console.log(MyNamespace.AnotherNamespace.nameFromAnotherNamespace);
