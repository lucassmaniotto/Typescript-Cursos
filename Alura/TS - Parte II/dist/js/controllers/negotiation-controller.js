import { Negotiation } from "../models/negotiation.js";
import { NegotiationList } from "../models/negotiationList.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { MessageView } from "../views/message-view.js";
export class NegotiationController {
    constructor() {
        this.negotiationList = new NegotiationList();
        this.negotiationView = new NegotiationsView("#negotiationsView");
        this.messageView = new MessageView("#messageView");
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negotiationView.update(this.negotiationList);
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "1";
        this.inputValue.value = parseFloat("0.0").toFixed(2);
        this.inputDate.focus();
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiationList.add(negotiation);
        this.negotiationView.update(this.negotiationList);
        this.messageView.update("Negociação adicionada com sucesso!");
        this.clearForm();
    }
}
