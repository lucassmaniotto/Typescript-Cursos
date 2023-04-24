export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string){
    this.name = name;
    this.cnpj = cnpj;
  }

  public addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  public showCollaborators(): void {
    console.log('\nCollaborators: ');
    for(const collaborator of this.collaborators) {
      console.log(collaborator.name, collaborator.surname);
    }
  }
}

export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly surname: string
  ) {}
}

const udemy = new Company('Udemy', '11.111.111/0001-11');
console.log(udemy);

const john = new Collaborator('John', 'Wick');
const neo = new Collaborator('Neo', '???');
const johnny = new Collaborator('Johnny', 'Silverhand');

udemy.addCollaborator(john);
udemy.addCollaborator(neo);
udemy.addCollaborator(johnny);

console.log('Collaborators after adding:');
console.log(udemy);

udemy.showCollaborators();
