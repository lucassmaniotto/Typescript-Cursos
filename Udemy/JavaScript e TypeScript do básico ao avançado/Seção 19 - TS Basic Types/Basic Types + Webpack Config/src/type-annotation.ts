// Inferência de tipos
let uName: string = 'Lucas'; // Qualquer tipo de strings: '', "", ``
let age: number = 22; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; // true, false
let symbol: symbol = Symbol('any-symbol'); // Symbol
let big: bigint = 10n; // bigint

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b', 'c'];
let arrayStrings2: string[] = ['a', 'b', 'c'];

// Objetos
let person: { name: string; age: number; adult?: boolean } = {
  name: 'Lucas',
  age: 22,
};

// Funções
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => (x + y);
