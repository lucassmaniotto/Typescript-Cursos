export class Writter {
  private _tool: Tool | null = null;

  constructor(
    private _name: string
  ) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  set tool(value: Tool) {
    this._tool = value;
  }

  write() {
    if (this._tool === null) {
      console.log('No tool is set');
      return;
    }
    this._tool.write();
  }

  showTool() {
    if (this._tool === null) {
      console.log('No tool is set');
      return;
    }
    console.log(`${this.name} is using ${this._tool.name}`);
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract write(): void;

  get name() {
    return this._name;
  }
}

export class Pen extends Tool {
  write() {
    console.log(`${this.name} is writing...`);
  }
}

export class Pencil extends Tool {
  write() {
    console.log(`${this.name} is writing...`);
  }
}

//========================== Main ==========================

const writter = new Writter('John');
const pen = new Pen('Pen');
const pencil = new Pencil('Pencil');

writter.tool = pen;
writter.showTool();
writter.write();

console.log('');

writter.tool = pencil;
writter.showTool();
writter.write();
