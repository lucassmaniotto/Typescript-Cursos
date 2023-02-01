import { Negociation } from "./models/negotiation.js";

const negociation = new Negociation(new Date(), 10, 100);
console.log(negociation.volume);