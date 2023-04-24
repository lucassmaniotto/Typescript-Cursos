export class Company {
  public readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

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

export class Udemy extends Company{
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();
    if(collaborator) return collaborator;
    return null;
  }
}

export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly surname: string
  ) {}
}

const udemy = new Udemy();
const john = new Collaborator('John', 'Wick');
const neo = new Collaborator('Neo', '???');
const johnny = new Collaborator('Johnny', 'Silverhand');

udemy.addCollaborator(john);
udemy.addCollaborator(johnny);
udemy.addCollaborator(neo);

udemy.showCollaborators();

udemy.popCollaborator();

udemy.showCollaborators();

