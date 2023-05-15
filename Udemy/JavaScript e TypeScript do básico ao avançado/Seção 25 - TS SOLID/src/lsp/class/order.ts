import { OrderStatus } from './interfaces/order-status';
import { LSPShoppingCart } from './shopping-cart';
import { OCPMessaging } from '../services/messaging';
import { OCPPersistence } from '../services/persistence';

export class LSPOrder {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: LSPShoppingCart,
    private readonly messaging: OCPMessaging,
    private readonly persistence: OCPPersistence
  ) { }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('Seu carrinho está vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com total de R$${this.shoppingCart.totalWithDiscount()} foi recebido.`);
    this.persistence.saveOrder();
    this.shoppingCart.clear();
  }
}
