enum Colors {
  RED, GREEN, BLUE
// 0,    1,    2
}

const input = 2;
const color = Colors[input];

if (color === 'GREEN') {
  console.log('GREEN');
} else if (color === 'RED') {
  console.log('RED');
} else if (color === 'BLUE') {
  console.log('BLUE');
}
