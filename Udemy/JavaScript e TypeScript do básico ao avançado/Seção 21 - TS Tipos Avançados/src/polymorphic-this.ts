export class Calculator {
  constructor(public number: number) {}

  add(value: number): this {
    this.number += value;
    return this;
  }

  subtract(value: number): this {
    this.number -= value;
    return this;
  }

  multiply(value: number): this {
    this.number *= value;
    return this;
  }

  divide(value: number): this {
    this.number /= value;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(value: number): this {
    this.number **= value;
    return this;
  }

  sqrt(): this {
    this.number = Math.sqrt(this.number);
    return this;
  }
}

const calculator = new SubCalculator(2);
const result = calculator.add(2).multiply(3).divide(2).subtract(2).pow(2).sqrt().number;

console.log(result);


// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Sending ${this.method?.toLocaleUpperCase()} request to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('post').send();
request.setUrl('http://www.google.com').setMethod('get').send();
