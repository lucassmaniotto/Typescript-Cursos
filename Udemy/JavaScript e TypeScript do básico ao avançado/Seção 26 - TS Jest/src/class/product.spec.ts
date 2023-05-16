import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined' , () => {
    const sut = createSut('Ancient Sword of the Elder Gods', 1000000);
    expect(sut).toHaveProperty('name', 'Ancient Sword of the Elder Gods');
    expect(sut).toHaveProperty('price', 1000000);
  });
});
