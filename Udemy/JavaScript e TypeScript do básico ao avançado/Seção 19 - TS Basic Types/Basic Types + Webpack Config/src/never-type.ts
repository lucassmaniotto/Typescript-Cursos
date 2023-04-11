function createError(message: string): never {
  throw new Error(message);
}

function fail() {
  return createError('Something failed');
}

function infiniteLoop(): never {
  while (true) {};
}

console.log(fail());
