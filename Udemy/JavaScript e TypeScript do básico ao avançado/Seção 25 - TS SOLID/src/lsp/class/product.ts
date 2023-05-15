import { CardItem } from "./interfaces/card-item";

export class LSPProduct implements CardItem {
  constructor(
    public name: string,
    public price: number
  ) { }
}
