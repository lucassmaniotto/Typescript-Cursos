/*
  ISP - Interface Segregation Principle
  Os clientes não devem ser forçados a depender de interfaces que não utilizam.
*/

import { ShoppingCart } from './class/shopping-cart';
import { Order } from './class/order';
import { Messaging } from './services/messaging';
import { Persistence } from './services/persistence';
import { Product } from './class/product';
import { TenPercentDiscount } from './class/discount';
import { EnterpriseCustomer } from './class/customer';

const discount = new TenPercentDiscount();
const enterpriseCustomer = new EnterpriseCustomer ('Empresa 1', '2222222222222');
const shoppingCart = new ShoppingCart(discount);
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence, enterpriseCustomer);
const index = 1;

console.log(`Adicionando itens ao carrinho...`);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));
shoppingCart.showItems();

console.log(`Removendo o item ${index + 1}...`);
shoppingCart.removeItem(index);

shoppingCart.showItems();

order.checkout();
