import { PersistenceProtocol } from "../class/interfaces/persistence-protocol";

export class Persistence implements PersistenceProtocol{
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
}
