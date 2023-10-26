export class Negociation {
    constructor(
        private _date: Date, 
        public readonly quantity: number, 
        public readonly value: number
    ) {}

    get volume(): number {
        return this.quantity * this.value;
    }

    get date(): Date {
        return new Date(this._date.getTime());
    }
}