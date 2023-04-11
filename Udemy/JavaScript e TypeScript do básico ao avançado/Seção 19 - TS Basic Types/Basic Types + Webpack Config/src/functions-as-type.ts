type MapStringCallback = (item: string) => string;

function mapString (array: string[], callback: MapStringCallback): string[] {
  const newArray: string[] = [];
  for (const element of array) {
    newArray.push(callback(element));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abcMapped);

