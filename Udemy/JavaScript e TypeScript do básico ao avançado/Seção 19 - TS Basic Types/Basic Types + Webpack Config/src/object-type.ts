const objExample: {
  key1: string;
  readonly key2: string;
  key3?: number;
  [key: string]: unknown; // Permite adicionar mais propriedades
} = {
  key1: 'value1',
  key2: 'value2',
};

objExample.key1 = 'value3';
objExample.key3 = 123;
