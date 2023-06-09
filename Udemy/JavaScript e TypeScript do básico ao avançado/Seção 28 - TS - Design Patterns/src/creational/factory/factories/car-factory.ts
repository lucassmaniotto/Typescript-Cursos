import { VehicleFactory } from "./vehicle-factory";
import { Car } from "../vehicle/car";

export class CarFactory extends VehicleFactory {
  getVehicle(carModel: string): Car {
    return new Car(carModel);
  }
}