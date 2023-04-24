export class Cart {
  private readonly products: Product[] = [];

  insertProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
    console.log(`${products.length} Produto(s) inserido(s) no carrinho com sucesso!`);
  }

  productsQuantity(): number {
    return this.products.length;
  }

  showProducts(): void {
    if (this.products.length === 0) {
      console.log('Nenhum produto foi inserido no carrinho!');
    }
    else {
      console.log('=-=-=-=-=-= Produtos =-=-=-=-=-=');
      for (const product of this.products) {
        console.log(`${product.name} \tR$${product.price.toFixed(2)}`);
      }
      console.log(`\nTotal:\tR$${this.total().toFixed(2)}`);
      console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
    }
  }

  total(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(
    private _name: string,
    public price: number
  ) {}

  get name() {
    return this._name;
  }
}

const product1 = new Product('Doritos', 11.9);
const product2 = new Product('Coca-Cola', 8.9);
const product3 = new Product('Abacate', 3.85);

const cart = new Cart();
console.log('');
cart.insertProduct(product1, product2, product3);
console.log('');
cart.showProducts();
