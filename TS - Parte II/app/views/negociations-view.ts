import { NegociationList } from "../models/negotiationList.js";

export class NegotiationsView {
    private _element: HTMLElement;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }

    template(model: NegociationList): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.list().map(negotiation => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>   
        `;
    }

    update(model: NegociationList): void { 
        this._element.innerHTML = this.template(model);
    }
}