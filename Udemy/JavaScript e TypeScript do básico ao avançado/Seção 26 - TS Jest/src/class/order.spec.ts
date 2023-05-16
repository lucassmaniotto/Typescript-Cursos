import { Order } from './order';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { CartItem } from './interfaces/cart-item';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistenceProtocol } from './interfaces/persistence-protocol';
import { CustomerOrder } from './interfaces/customer-protocol';

 // Mocks
 /* ------------------------------------------------------- */
class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> { return [] }
  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  total(): number { return 1 }
  totalWithDiscount(): number { return 2 }
  isEmpty(): boolean { return false }
  clear(): void {}
  showItems(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {}
}

class PersistenceMock implements PersistenceProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  getName(): string { return '' }
  getIDN(): string { return '' }
}
/* ------------------------------------------------------- */

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistenceMock = new PersistenceMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistenceMock,
    customerMock
  );
  return { sut, shoppingCartMock, messagingMock, persistenceMock, customerMock };
};

describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('should send an email to customer', () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest
      .spyOn(messagingMock, 'sendMessage');
    sut.checkout();
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistenceMock } = createSut();
    const persistenceMockSpy = jest
      .spyOn(persistenceMock, 'saveOrder');
    sut.checkout();
    expect(persistenceMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'clear');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call getName() and getIDN() from customer', () => {
    const { sut, customerMock } = createSut();
    const customerMockSpyGetName = jest
      .spyOn(customerMock, 'getName')
      .mockReturnValueOnce('Nome');
    const customerMockSpyGetIDN = jest
      .spyOn(customerMock, 'getIDN')
      .mockReturnValueOnce('IDN');
    sut.checkout();
    expect(customerMockSpyGetName).toHaveBeenCalledTimes(1);
    expect(customerMockSpyGetIDN).toHaveBeenCalledTimes(1);
    expect(customerMockSpyGetName).toHaveBeenCalledWith();
    expect(customerMockSpyGetIDN).toHaveBeenCalledWith();
  });
});
