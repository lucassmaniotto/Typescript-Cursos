export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private count = 0;
  private elements: { [key: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.count--;
    const element = this.elements[this.count];
    delete this.elements[this.count];
    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  length(): number {
    return this.count;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.length());

while (!stack.isEmpty()) {
  console.log(stack.pop());
}

console.log(stack.length());
