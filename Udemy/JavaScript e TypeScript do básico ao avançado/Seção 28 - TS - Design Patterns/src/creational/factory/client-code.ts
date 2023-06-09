/* PRESO NA CLASSE CONCRETA
  import { Car } from "./vehicle/car";

  const fusca = new Car("Fusca");
  fusca.pickUp("Peter Porker");
  fusca.stop();

  const gol = new Car("Gol");
  gol.pickUp("Spider Noire"); 
*/

import { CarFactory } from "./factories/car-factory";
import { MotorcycleFactory } from "./factories/motorcycle-factory";

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle("Fusca");
fusca.pickUp("Peter Porker");
fusca.stop();

const gol = carFactory.getVehicle("Gol");
gol.pickUp("Spider Noire");
gol.stop();

const motorcycleFactory = new MotorcycleFactory();
const harley = motorcycleFactory.getVehicle("Harley");
harley.pickUp("Ghost Rider");
harley.stop();

const indian = motorcycleFactory.getVehicle("Indian");
indian.pickUp("Wolverine");
indian.stop();