import { Discount, FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount' , () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.50)).toBe(75.25);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBe(9);
  });
});
