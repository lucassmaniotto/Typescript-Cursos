function noReturn(...args: string[]): void {
    console.log(args.join(' '));
}

const persona = {
  name: 'John',
  lastName: 'Wick',

  showName(): void {
      console.log(this.name + ' ' + this.lastName);
  }
};

noReturn(persona.name, persona.lastName);
persona.showName();
