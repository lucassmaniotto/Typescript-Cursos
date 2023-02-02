import { Negociation } from "../models/negotiation.js";
import { NegociationList } from "../models/negotiationList.js";
import { NegotiationsView } from "../views/negociations-view.js";
import { MessageView } from "../views/message-view.js";

export class NegotiantionController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiationList = new NegociationList();
    private negotiationView = new NegotiationsView("#negociationsView");
    private messageView = new MessageView("#messageView");

    constructor() {
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negotiationView.update(this.negotiationList);
    }

    createNegotiation(): Negociation {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);

        return new Negociation(
            date,
            quantity,
            value
        );
    }

    clearForm(): void {
        this.inputDate.value = "";
        this.inputQuantity.value = "1";
        this.inputValue.value = parseFloat("0.0").toFixed(2);
        this.inputDate.focus();
    }

    add(): void {
        const negotiation = this.createNegotiation();
        this.negotiationList.add(negotiation);
        this.negotiationView.update(this.negotiationList);
        this.messageView.update("Negociação adicionada com sucesso!");
        this.clearForm();
    }

}