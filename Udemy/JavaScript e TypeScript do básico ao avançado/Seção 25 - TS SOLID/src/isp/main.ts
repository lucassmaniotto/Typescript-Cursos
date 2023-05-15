/*
  ISP - Interface Segregation Principle
  Os clientes não devem ser forçados a depender de interfaces que não utilizam.
*/

import { LSPShoppingCart } from './class/shopping-cart';
import { LSPOrder } from './class/order';
import { OCPMessaging } from './services/messaging';
import { OCPPersistence } from './services/persistence';
import { LSPProduct } from './class/product';
import { TenPercentDiscount } from './class/discount';
import { EnterpriseCustomer } from './class/customer';

const discount = new TenPercentDiscount();
const enterpriseCustomer = new EnterpriseCustomer ('Empresa 1', '2222222222222');
const shoppingCart = new LSPShoppingCart(discount);
const messaging = new OCPMessaging();
const persistence = new OCPPersistence();
const order = new LSPOrder(shoppingCart, messaging, persistence, enterpriseCustomer);
const index = 1;

console.log(`Adicionando itens ao carrinho...`);
shoppingCart.addItem(new LSPProduct('Camiseta', 49.9));
shoppingCart.addItem(new LSPProduct('Caderno', 9.9));
shoppingCart.addItem(new LSPProduct('Lápis', 1.59));
shoppingCart.showItems();

console.log(`Removendo o item ${index + 1}...`);
shoppingCart.removeItem(index);

shoppingCart.showItems();

order.checkout();
