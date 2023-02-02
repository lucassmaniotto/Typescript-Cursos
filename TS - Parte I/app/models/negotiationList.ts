import { Negociation } from "./negotiation.js";

export class NegociationList {
    private negotiations: Array<Negociation> = [];

    add(negotiation: Negociation) {
        this.negotiations.push(negotiation);
    }

    list(): ReadonlyArray<Negociation> {
        return this.negotiations;
    }
}