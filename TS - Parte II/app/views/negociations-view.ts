import { View } from "./view.js";
import { NegociationList } from "../models/negotiationList.js";

export class NegotiationsView extends View<NegociationList> {

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
        const template = this.template(model);
        this._element.innerHTML = template;
    }
}