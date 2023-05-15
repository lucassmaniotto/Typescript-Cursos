/*
  LSP - Liskov Substitution Principle (Princípio da substituição de Liskov)
  Se Φ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então Φ(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

  Subtipos precisam ser substituíveis por seus tipos de base.
  Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

import { LSPShoppingCart } from './class/shopping-cart';
import { LSPOrder } from './class/order';
import { OCPMessaging } from './services/messaging';
import { OCPPersistence } from './services/persistence';
import { LSPProduct } from './class/product';
import { TenPercentDiscount } from './class/discount';

const discount = new TenPercentDiscount();
const shoppingCart = new LSPShoppingCart(discount);
const messaging = new OCPMessaging();
const persistence = new OCPPersistence();
const order = new LSPOrder(shoppingCart, messaging, persistence);
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
