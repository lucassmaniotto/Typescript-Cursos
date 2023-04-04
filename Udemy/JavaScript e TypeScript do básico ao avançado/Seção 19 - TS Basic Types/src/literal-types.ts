let z = 10;
z = 0b1010;
const c = 100;

let a: 100 = 100; // Tipo literal
//a = 10; -> a não pode ser atribuido a outro valor que não seja 100

let b = 100 as const; // Tipo literal -> const assertion é mais recomendado
//b = 10; -> b não pode ser atribuido a outro valor que não seja 100

const wick = {
  name : 'John',
  lastname : 'Wick' as const,
};

function selectColor(color: 'Vermelho' | 'Amarelo' | 'Azul') {
  return color;
}

console.log(selectColor('Amarelo'));
