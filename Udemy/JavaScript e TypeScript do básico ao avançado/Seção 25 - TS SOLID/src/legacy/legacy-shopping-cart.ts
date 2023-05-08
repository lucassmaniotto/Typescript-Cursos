type Product = {name: string; price: number};
type OrderStatus = 'open' | 'closed';

export class LegacyShoppingCart {
  private readonly _items: Product[] = [];
  private _orderStatus: OrderStatus = 'open';

  get items(): Readonly<Product[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
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

  addItem(item: Product): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de R$${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  private total(): number {
    return + this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  private isEmpty(): boolean {
    return this._items.length === 0;
  }

  private sendMessage(msg: string): void {
    console.log(msg);
  }

  private saveOrder(): void {
    console.log('Pedido salvo com sucesso.');
  }

  private clear(): void {
    console.log('Carrinho de compras foi limpo.');
    this._items.length = 0;
  }
}
