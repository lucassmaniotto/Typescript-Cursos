const body = document.querySelector('body');
if (body) body.style.background = 'red'; // Type assertion não é necessário porque o body é tratado como um HTMLBodyElement dentro do if

// Type assertion deve ser usado porque o TS não sabe que o body é um HTMLBodyElement
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

// HTMLElement
const input1 = document.querySelector('.input') as HTMLInputElement;
input1.value = 'Qualquer coisa';

/* Não Recomendado */
// Non-null assertion (!)
const body3 = document.querySelector('body')!;
body3.style.background = 'red';

// Type assertion
const body4 = document.querySelector('body') as unknown as number;
