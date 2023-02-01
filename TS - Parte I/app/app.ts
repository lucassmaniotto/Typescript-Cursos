import { Negociation } from "./models/negotiation.js";

const negociation = new Negociation(new Date(), 1, 100);
console.log(negociation.volume);