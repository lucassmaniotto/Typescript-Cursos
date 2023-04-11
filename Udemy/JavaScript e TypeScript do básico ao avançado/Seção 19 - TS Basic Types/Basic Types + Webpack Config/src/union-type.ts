function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'string' || typeof b === 'string') {
    return `${a}${b}`;
  }
  return a + b;
}

console.log(addOrConcat(1, 2));
console.log(addOrConcat('1', '2'));
console.log(addOrConcat(1, '2'));
console.log(addOrConcat('1', 2));
