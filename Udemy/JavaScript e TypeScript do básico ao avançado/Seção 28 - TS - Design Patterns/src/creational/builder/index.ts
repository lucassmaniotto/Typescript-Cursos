import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

const meal2 = mainDishBuilder.makeBeverage().makeDessert().getMeal();
console.log(meal2, meal2.getPrice());

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal, veganMeal.getPrice());