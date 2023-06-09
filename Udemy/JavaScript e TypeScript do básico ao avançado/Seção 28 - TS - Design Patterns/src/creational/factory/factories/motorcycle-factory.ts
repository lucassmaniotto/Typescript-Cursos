import { VehicleFactory } from "./vehicle-factory";
import { Motorcycle } from "../vehicle/motorcycle";

export class MotorcycleFactory extends VehicleFactory {
  getVehicle(motorcycleModel: string): Motorcycle {
    return new Motorcycle(motorcycleModel);
  }
}