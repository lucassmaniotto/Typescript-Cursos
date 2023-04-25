type ObjColors =  typeof objColors;
type KeyObjColors = keyof ObjColors;

const objColors = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo',
  yellow: 'amarelo',
  black: 'preto',
  white: 'branco',
  gray: 'cinza',
  pink: 'rosa',
  brown: 'marrom',
  orange: 'laranja',
}

function translateColor(color: KeyObjColors): string {
  return objColors[color];
}

console.log(translateColor('red'));
console.log(translateColor('green'));
console.log(translateColor('blue'));
