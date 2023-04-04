type HaveLightsaber = {lightsaber: boolean};
type HaveForce = {force: boolean};
type Jedi = HaveLightsaber & HaveForce;
type Sith = HaveLightsaber & HaveForce;
type Grievous = HaveLightsaber;
type ForceBeing = Jedi | Sith;
type Warrior = Jedi | Sith | Grievous;

const yoda: Jedi = {lightsaber: true, force: true};
const vader: Sith = {lightsaber: true, force: true};
const grievous: Grievous = {lightsaber: true};

function lightsaber(warrior1: Warrior, warrior2: Warrior) {
  return warrior1.lightsaber && warrior2.lightsaber;
}

function force(warrior1: ForceBeing, warrior2: ForceBeing) {
  return warrior1.force && warrior2.force;
}

console.log(lightsaber(yoda, vader));
console.log(lightsaber(yoda, grievous));
console.log(lightsaber(vader, grievous));

console.log(force(yoda, vader));
// console.log(force(yoda, grievous)); -> grievous não é um ForceBeing
// console.log(force(vader, grievous)); -> grievous não é um Sith nem um Jedi
