import { CardItem } from "./interfaces/card-item";

export class Product implements CardItem {
  constructor(
    public name: string,
    public price: number
  ) { }
}
