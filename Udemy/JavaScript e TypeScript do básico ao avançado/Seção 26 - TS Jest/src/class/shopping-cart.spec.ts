import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
}

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Bow', 40);
  const cartItem2 = createCartItem('Simple Dagger', 10);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};


describe('ShoppingCart', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should be have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(50);
    expect(sut.totalWithDiscount()).toBe(50);
  });

  it('should call discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call showItems and log cart items', () => {
    const { sut } = createSutWithProducts();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.showItems();
    expect(consoleSpy).toHaveBeenCalledTimes(8);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '\n-------------- Nota Fiscal --------------');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Produto: Bow - Preço: R$40');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Produto: Simple Dagger - Preço: R$10');
    expect(consoleSpy).toHaveBeenNthCalledWith(4, '');
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Compra: R$50');
    expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Desconto: R$0.00');
    expect(consoleSpy).toHaveBeenNthCalledWith(7, 'Total: R$50');
    expect(consoleSpy).toHaveBeenNthCalledWith(8, '-----------------------------------------\n');
  });

  it('should call showItems and inform that cart is empty', () => {
    const { sut } = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.showItems();
    expect(sut.isEmpty()).toBe(true);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '\n-------------- Nota Fiscal --------------');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Seu carrinho está vazio.');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '');
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Compra: R$0');
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Desconto: R$0.00');
    expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Total: R$0');
    expect(consoleSpy).toHaveBeenNthCalledWith(7, '-----------------------------------------\n');
  });
});
