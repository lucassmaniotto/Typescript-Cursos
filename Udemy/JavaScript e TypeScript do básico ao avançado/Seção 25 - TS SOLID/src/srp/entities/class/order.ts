import { OrderStatus } from '../interfaces/order-status';
import { SRPShoppingCart } from './shopping-cart';
import { SRPMessaging } from '../../services/messaging';
import { SRPPersistence } from '../../services/persistence';

export class SRPOrder {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: SRPShoppingCart,
    private readonly messaging: SRPMessaging,
    private readonly persistence: SRPPersistence
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
    this.messaging.sendMessage(`Seu pedido com total de R$${this.shoppingCart.total()} foi recebido.`);
    this.persistence.saveOrder();
    this.shoppingCart.clear();
  }
}
