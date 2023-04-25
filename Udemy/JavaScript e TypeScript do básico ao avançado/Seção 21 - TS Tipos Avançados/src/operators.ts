type Doc = {
  title: string;
  text: string;
  date?: Date;
};

const doc: Doc = {
  title: 'The Title',
  text: 'The Text',
  //date: new Date(),
};

// Encadeamento opcional
console.log(doc.date?.toDateString());

// Operador de coalescência nula
console.log(doc.date?.toDateString() ?? 'Não existe data!');
console.log(undefined ?? 'Não existe data!');
console.log(null ?? 'Não existe data!');
console.log(false ?? 'Não existe data!');
console.log(0 ?? 'Não existe data!');
console.log('' ?? 'Não existe data!');
