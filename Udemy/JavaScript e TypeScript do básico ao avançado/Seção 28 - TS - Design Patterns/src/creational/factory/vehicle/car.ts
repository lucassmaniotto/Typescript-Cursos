import { Vehicle } from "./vehicle";

export class Car implements Vehicle {
  constructor(private _model: string) {}

  pickUp(customerName: string): void {
    console.log(
      `${this._model} está buscando ${customerName}`
    );
  }

  stop(): void {
    console.log(`${this._model} parou`);
  }
}
