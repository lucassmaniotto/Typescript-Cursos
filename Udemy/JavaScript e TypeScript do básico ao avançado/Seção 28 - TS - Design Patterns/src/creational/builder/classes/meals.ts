import { AbstractMeal } from './abstract-meal';

export class Rice extends AbstractMeal {
  constructor(price: number) {
    super('Arroz', price);
  }
}

export class Beans extends AbstractMeal {
  constructor(price: number) {
    super('Feijão', price);
  }
}

export class Meat extends AbstractMeal {
  constructor(price: number) {
    super('Carne', price);
  }
}

export class Potato extends AbstractMeal {
  constructor(price: number) {
    super('Batata', price);
  }
}

export class Beverage extends AbstractMeal {}

export class Dessert extends AbstractMeal {}