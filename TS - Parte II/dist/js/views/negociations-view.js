export class NegotiationsView {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
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
    update(model) {
        this._element.innerHTML = this.template(model);
    }
}
