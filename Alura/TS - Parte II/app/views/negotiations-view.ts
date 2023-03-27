import { View } from "./view.js";
import { NegotiationList } from "../models/negotiationList.js";

export class NegotiationsView extends View<NegotiationList> {

    protected template(model: NegotiationList): string {
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
                                <td>${this.dateConverter(negotiation.date)}</td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>   
        `;
    }
    
    private dateConverter(date: Date): string {
        return new Intl.DateTimeFormat().format(date);
    }

    update(model: NegotiationList): void {
        const template = this.template(model);
        this._element.innerHTML = template;
    }
}