import { Negociation } from "../models/negotiation.js";
export class NegotiantionController {
    constructor() {
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "1";
        this.inputValue.value = parseFloat("0.0").toFixed(2);
        this.inputDate.focus();
    }
    add() {
        const negotiation = this.createNegotiation();
        console.log(negotiation);
        this.clearForm();
    }
}
