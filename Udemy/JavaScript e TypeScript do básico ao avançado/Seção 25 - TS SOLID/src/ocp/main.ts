/*
  OCP - Open Closed Principle
  Entidades devem estar abertas para extensão, mas fechadas para modificação.
*/

import { OCPShoppingCart } from './class/shopping-cart';
import { OCPOrder } from './class/order';
import { OCPMessaging } from './services/messaging';
import { OCPPersistence } from './services/persistence';
import { OCPProduct } from './class/product';
import { TenPercentDiscount } from './class/discount';

const discount = new TenPercentDiscount();
const shoppingCart = new OCPShoppingCart(discount);
const messaging = new OCPMessaging();
const persistence = new OCPPersistence();
const order = new OCPOrder(shoppingCart, messaging, persistence);
const index = 1;

console.log(`Adicionando itens ao carrinho...`);
shoppingCart.addItem(new OCPProduct('Camiseta', 49.9));
shoppingCart.addItem(new OCPProduct('Caderno', 9.9));
shoppingCart.addItem(new OCPProduct('Lápis', 1.59));
shoppingCart.showItems();

console.log(`Removendo o item ${index + 1}...`);
shoppingCart.removeItem(index);

shoppingCart.showItems();

order.checkout();
