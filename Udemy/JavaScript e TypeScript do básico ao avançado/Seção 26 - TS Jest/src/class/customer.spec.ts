import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string) => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Jet', 'Black', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Jet');
    expect(sut).toHaveProperty('lastName', 'Black');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Jet', 'Black', '111.111.111-11');
    expect(sut.getName()).toBe('Jet Black');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Bebop', '222.222.222/2222-22');
    expect(sut).toHaveProperty('name', 'Bebop');
    expect(sut).toHaveProperty('cnpj', '222.222.222/2222-22');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Bebop', '222.222.222/2222-22');
    expect(sut.getName()).toBe('Bebop');
    expect(sut.getIDN()).toBe('222.222.222/2222-22');
  });
});
