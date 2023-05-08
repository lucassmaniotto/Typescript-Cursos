import { CardItem } from "../interfaces/card-item";

export class SRPProduct implements CardItem {
  constructor(
    public name: string,
    public price: number
  ) { }
}
