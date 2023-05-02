namespace MyNamespace {
  export const name = 'MyNamespace';
  export class MyClass {
    public name = 'MyClass';
  }
}

console.log(MyNamespace.name);
console.log(new MyNamespace.MyClass().name);
