interface Constructor { new (...args: any[]): any };

// Função que recebe a classe como parâmetro e retorna uma nova classe com as propriedades alteradas
function invertAttributes(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {

    console.log('Sou o decorador e recebi o objeto', target.name);
    console.log('Os atributos do objeto ainda não existem', target.prototype);

    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.invert(args[0]);
        this.color = this.invert(args[3]);
      }

      invert(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    }
  }
}

function anotherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Sou outro decorador' + param1);
    return target;
  }
}

@anotherDecorator(' e bota bichinha bunita que vai se criada')
@invertAttributes('Linda', 'Fofa') // Notação de decorador que executa a função decorator quando a classe é instanciada
export class Animal {
  constructor(
    public name: string,
    public age: number,
    public isDomestic: boolean,
    public color: string,
    public type: string
    ) {
      console.log('Sou a classe e os atributos já existem');
    }
}

const animal = new Animal('airaM', 2, true, 'adamacse aterP', 'Gata');
console.log(animal);
