export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attackPower: number,
    protected _life: number,
  ) {}

  get life(): number {
    return this._life;
  }

  attack(character: Character): void {
    console.log(`$${this.emoji} {this.name} attacked ${character.name}!`);
    character.loseLife(this.attackPower);
  }

  loseLife(attackPower: number): void {
    this._life -= attackPower;
    console.log(`${this.emoji} ${this.name} lost ${attackPower} life points.`);
  }

  showLife(): void {
    this._life > 0 ? console.log(`${this.emoji} ${this.name} has ${this._life} life points.`) : console.log(`${this.emoji} ${this.name} is dead.`);
  }

  abstract conjureMagic(character: Character): void;
  abstract showStatus(): void;
}

// ======================================= Concrete classes =======================================
export class Wizard extends Character {
  protected emoji = '🧙‍♂️';

  conjureMagic(character: Character): void {
    console.log(`${this.emoji} ${this.name} conjured Fireball!`);
    character.loseLife(this.attackPower * 2.5);
  }

  showStatus(): void {
    console.log(`Name: ${this.name} ${this.emoji}\nAttack Power: ${this.attackPower}\nLife: ${this._life}\nMagic: Fireball\n`);
  }
}

export class Vampire extends Character {
  protected emoji = '🧛‍♂️';

  heal(): void {
    console.log(`${this.emoji} ${this.name} healed 15 life points.`);
    this._life += 15;
  }

  conjureMagic(character: Character): void {
    console.log(`${this.emoji} ${this.name} conjured Vampiric Touch!`);
    character.loseLife(this.attackPower * 2);
    this.heal();
  }

  showStatus(): void {
    console.log(`Name: ${this.name} ${this.emoji}\nAttack Power: ${this.attackPower}\nLife: ${this._life}\nMagic: Vampiric Touch\n`);
  }
}

//=======================================        Main       =======================================
const wizard = new Wizard('Mordekainen', 12, 100);
const necromancer = new Vampire('Strahd von Zarovich', 10, 100);

wizard.showStatus();
necromancer.showStatus();

for (let i = 0; i < 10; i++) {
  if (necromancer.life > 0) {
    wizard.conjureMagic(necromancer);
    console.log('');
    if (necromancer.life <= 0) {
      break;
    }
  }
  if (wizard.life > 0) {
    necromancer.conjureMagic(wizard);
    console.log('');
    if (wizard.life <= 0) {
      break;
    }
  }
}

wizard.showLife();
necromancer.showLife();
