import { Negociation } from "./negotiation.js";

export class NegociationList {
    private negotiations: Negociation[] = [];

    add(negotiation: Negociation) {
        this.negotiations.push(negotiation);
    }

    list(): readonly Negociation[] {
        return this.negotiations;
    }
}