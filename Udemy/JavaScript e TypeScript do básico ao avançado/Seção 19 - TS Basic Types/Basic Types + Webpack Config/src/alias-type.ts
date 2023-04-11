type Age = number;
type Person = {
  name: string;
  age: Age
  pet?: string;
};

type Pets = 'dog' | 'cat' | 'bird' | 'fish';
type Pokemons = 'Pikachu' | 'Bulbasaur' | 'Charmander' | 'Squirtle';
type Animals = Pets | Pokemons;

const trainer: Person = {
  name: 'Ash',
  age: 10,
  pet: 'Pikachu'
};

function setPet(trainer: Person, pet: Animals): Person {
  return {...trainer, pet};
}

const newTrainer = setPet(trainer, 'Squirtle');
console.log(newTrainer);
