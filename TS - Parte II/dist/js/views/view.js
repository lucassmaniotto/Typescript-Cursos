export class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update(model) {
        let template = this.template(model);
        this._element.innerHTML = template;
    }
}
