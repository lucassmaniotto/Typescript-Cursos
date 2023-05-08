import { CardItem } from '../interfaces/card-item';

export class SRPShoppingCart {
  private readonly _items: CardItem[] = [];

  get items(): Readonly<CardItem[]> {
    return this._items;
  }

  showItems(): void {
    console.log('\n-------------- Nota Fiscal --------------');
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio.');
    } else {
      for (const item of this._items) {
        console.log(`Produto: ${item.name} - Preço: R$${item.price}`);
      }
    }
    console.log('');
    console.log(`Total: R$${this.total()}`);
    console.log('-----------------------------------------\n');
  }

  addItem(item: CardItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return + this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo.');
    this._items.length = 0;
  }
}
