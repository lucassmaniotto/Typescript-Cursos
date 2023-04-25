type Vehicle = {
  brand: string;
  model: string;
  year: number;
}

type Car = {
  brand: Vehicle['brand'];
  model: Vehicle['model'];
  year: Vehicle['year'];
  color: string;
  name: string;
}

const car: Car = {
  brand: 'Mazda',
  model: 'MX-5',
  year: 1997,
  color: 'red',
  name: 'Mazda Miata',
}
