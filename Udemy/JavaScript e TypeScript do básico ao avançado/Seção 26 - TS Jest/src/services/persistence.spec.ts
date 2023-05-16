import { Persistence } from './persistence';

const createSut = () => {
  return new Persistence();
};

describe('Persistence', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
