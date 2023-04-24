export class Car {
  private readonly _engine: Engine = new Engine();

  turnOn(): void {
    this._engine.turnOn();
  }

  speedUp(): void {
    this._engine.speedUp();
  }

  speedDown(): void {
    this._engine.speedDown();
  }

  turnOff(): void {
    this._engine.turnOff();
  }
}

export class Engine {
  turnOn(): void {
    console.log('Motor ligado!');
  }

  speedUp(): void {
    console.log('Acelerando...');
  }

  speedDown(): void {
    console.log('Desacelerando...');
  }

  turnOff(): void {
    console.log('Motor desligado!');
  }
}

const car = new Car();
console.log('');
car.turnOn();
console.log('');
for(let i = 0; i < 5; i++) {
  car.speedUp();
}
console.log('');
for(let i = 0; i < 5; i++) {
  car.speedDown();
}
console.log('');
car.turnOff();
