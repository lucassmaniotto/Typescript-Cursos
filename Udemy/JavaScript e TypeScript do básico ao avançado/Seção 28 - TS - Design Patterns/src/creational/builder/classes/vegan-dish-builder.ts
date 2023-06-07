import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Beverage, Dessert, Potato, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice(5);
    const beans = new Beans(10);
    const potato = new Potato(15);
    this._meal.add(rice, beans, potato);
    return this
  }

  makeBeverage(): this {
    const beverage = new Beverage('Coca-Cola', 10);
    this._meal.add(beverage);
    return this
  }

  makeDessert(): this {
    const dessert = new Dessert('Arroz Doce', 5);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}