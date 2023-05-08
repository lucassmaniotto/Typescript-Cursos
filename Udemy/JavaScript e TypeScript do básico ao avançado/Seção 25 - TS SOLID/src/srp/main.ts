import { SRPShoppingCart } from './entities/class/shopping-cart';
import { SRPOrder } from './entities/class/order';
import { SRPMessaging } from './services/messaging';
import { SRPPersistence } from './services/persistence';
import { SRPProduct } from './entities/class/product';

const shoppingCart = new SRPShoppingCart();
const messaging = new SRPMessaging();
const persistence = new SRPPersistence();
const order = new SRPOrder(shoppingCart, messaging, persistence);
const index = 1;

shoppingCart.showItems();

console.log(`Adicionando itens ao carrinho...`);
shoppingCart.addItem(new SRPProduct('Camiseta', 49.9));
shoppingCart.addItem(new SRPProduct('Caderno', 9.9));
shoppingCart.addItem(new SRPProduct('Lápis', 1.59));
shoppingCart.showItems();

console.log(`Removendo item do índice ${index}...`);
shoppingCart.removeItem(index);

shoppingCart.showItems();

order.checkout();

shoppingCart.showItems();
