import { View } from "./view.js";
export class NegotiationsView extends View {
    template(model) {
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
    dateConverter(date) {
        return new Intl.DateTimeFormat().format(date);
    }
    update(model) {
        const template = this.template(model);
        this._element.innerHTML = template;
    }
}
