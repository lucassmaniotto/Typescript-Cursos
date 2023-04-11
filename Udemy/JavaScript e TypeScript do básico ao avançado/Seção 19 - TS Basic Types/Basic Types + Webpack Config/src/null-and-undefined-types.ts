export function createPerson(firstName: string, lastName?: string) {
  const fullName = `${firstName} ${lastName || ''}`;
  return fullName;
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

console.log(createPerson('John', 'Wick'));

console.log(squareOf(2));

if (squareOf('2') === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOf('2'));
}
