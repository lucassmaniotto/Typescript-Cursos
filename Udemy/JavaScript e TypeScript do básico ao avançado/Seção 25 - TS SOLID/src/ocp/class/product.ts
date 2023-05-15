import { CardItem } from "./interfaces/card-item";

export class OCPProduct implements CardItem {
  constructor(
    public name: string,
    public price: number
  ) { }
}
