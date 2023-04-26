type FilterCallback<U> = (
  value: U,
  index?: number,
  array?: U[],
) => boolean;

export function myFilter<T>(array: T[], callback: FilterCallback<T>): T[] {
  const newArray = [];
  for (const element of array) {
    if (callback(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const originalArrayFilter = array.filter((value) => value % 2 === 0);
console.log(originalArrayFilter);

const myArrayFilter = myFilter(array, (value) => value % 2 === 0);
console.log(myArrayFilter);
