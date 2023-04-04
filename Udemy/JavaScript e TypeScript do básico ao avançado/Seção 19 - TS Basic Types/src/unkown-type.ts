let x: unknown;
x = 1;
x = 'hello';
x = true;
x = {};
x = [];
x = null;
x = undefined;
x = new Date();
x = 987654320;
const y = x;

if (typeof x === 'number') console.log(x);
