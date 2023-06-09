import { Vehicle } from "./vehicle";

export class Motorcycle implements Vehicle {
  constructor(private _model: string) {}

  pickUp(delivery: string): void {
    console.log(
      `${this._model} está buscando a mercadoria ${delivery}`
    );
  }

  stop(): void {
    console.log(`${this._model} parou`);
  }
}
