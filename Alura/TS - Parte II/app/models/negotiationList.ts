import { Negotiation } from "./negotiation.js";

export class NegotiationList {
    private negotiations: Negotiation[] = [];

    add(negotiation: Negotiation) {
        this.negotiations.push(negotiation);
    }

    list(): readonly Negotiation[] {
        return this.negotiations;
    }
}