// Record
const object1: Record<string, string | number> = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
};
console.log(object1);

//Required
type Person = {
  name?: string;
  lastName?: string;
  age?: number;
};

type RequiredPerson = Required<Person>;

const object2: Person = {
  //name: 'John',
  lastName: 'Doe',
  //age: 25,
};
console.log(object2);

const object3: RequiredPerson = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
};
console.log(object3);

// Partial
type PartialPerson = Partial<RequiredPerson>;

const object4: PartialPerson = {
  name: 'John',
  lastName: 'Doe',
  //age: 25,
};
console.log(object4);

// Readonly
type ReadonlyPerson = Readonly<RequiredPerson>;

const object5: ReadonlyPerson = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
};
console.log(object5);

// Pick
type PickPerson = Pick<RequiredPerson, 'name' | 'lastName'>;

const object6: PickPerson = {
  name: 'John',
  lastName: 'Doe',
};
console.log(object6);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type ExtractType = Extract<ABC, CDE>; // 'C' -> C se repete em ambos
type ExcludeType = Exclude<ABC, CDE>; // 'A' | 'B' -> C se repete em ambos

// Exemplo de uso
type AccountMongo = {
  _id: string;
  name: string;
  lastName: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'ssfd6s5d4sf6d5f4sd54sfd5sdf46',
  name: 'John',
  lastName: 'Doe',
  age: 25,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:', accountApi);
