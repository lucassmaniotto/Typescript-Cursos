import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const vehicle = this.getVehicle(vehicleName);
    vehicle.pickUp(customerName);
    return vehicle;
  }

  stop(vehicleName: string): Vehicle {
    const vehicle = this.getVehicle(vehicleName);
    vehicle.stop();
    return vehicle;
  }
}