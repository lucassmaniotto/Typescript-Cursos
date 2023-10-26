import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesSevice {
  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8081/dados")
      .then((res) => res.json())
      .then((dados: NegociacaoDoDia[]) => {
        return dados.map(
          (dado) => new Negociacao(new Date(), dado.vezes, dado.montante)
        );
      });
  }
}
