import { Negociacao } from "../models/negociacao.js";
export class NegociacoesSevice {
    obterNegociacoesDoDia() {
        return fetch("http://localhost:8081/dados")
            .then((res) => res.json())
            .then((dados) => {
            return dados.map((dado) => new Negociacao(new Date(), dado.vezes, dado.montante));
        });
    }
}
