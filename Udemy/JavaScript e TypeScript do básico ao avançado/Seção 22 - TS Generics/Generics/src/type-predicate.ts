export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const returnNumber = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return returnNumber;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(...[1, 2, 3, 4, '5', 10]));
console.log(sum('a', 'b', 'c', 'd', 'e'));
