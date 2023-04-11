export function multiplyArgs(...args: Array<number>): number {
    return args.reduce((acc, value) => acc * value, 1);
}

export function concatString(...args: string[]): string {
    return args.reduce((acc, value) => acc + value);
}

export function mapToUpperCase(...args: string[]): string[] {
    return args.map(value => value.toUpperCase());
}

const result = multiplyArgs(2, 2, 3);
const concat = concatString('a', 'b', 'c');
const upper = mapToUpperCase('a', 'b', 'c');

console.log(result);
console.log(concat);
console.log(upper.join(''));
