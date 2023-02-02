import { Negociation } from "../models/negotiation.js";
import { NegociationList } from "../models/negotiationList.js";

export class NegotiantionController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiationList = new NegociationList();

    constructor() {
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
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
        this.clearForm();
        console.log(this.negotiationList.list());
    }

}