type VotingOption = {
  numberOfVotes: number;
  option: string;
}

export class VotingPool {
  private _voteOptions: VotingOption[] = [];
  constructor(public details: string) {}

  addVoteOption(voteOption: VotingOption) {
    this._voteOptions.push(voteOption);
  }

  vote(voteIndex: number): void {
    if (!this._voteOptions[voteIndex]) return;
    this._voteOptions[voteIndex].numberOfVotes++;
  }

  get voteOptions(): VotingOption[] {
    return this._voteOptions;
  }
}

export class VotingMachine {
  private votes: VotingPool[] = [];

  addVotingPoll(vote: VotingPool) {
    this.votes.push(vote);
  }

  showVotingPools(): void {
    let indexOfThePool = this.votes.indexOf(this.votes[0]);
    console.log("============== Todas votações: ==============");
    for (const vote of this.votes) {
    console.log(`Votação ${indexOfThePool + 1}:`);
    this.showDetails(vote);
    indexOfThePool++;
   }
   console.log("");

  }

  private showDetails(vote: VotingPool): void {
    console.log(vote.details);
    for (const voteOption of vote.voteOptions) {
      console.log(`${voteOption.option} - ${voteOption.numberOfVotes}`);
    }
    console.log("");
  }

  showSpecificVote(voteIndex: number): void {
    const vote = this.votes[voteIndex];
    if (!vote) return;
    this.showDetails(vote);
  }
}

const votation = new VotingPool(" Qual sua linguagem de programação favorita?");
votation.addVoteOption({ numberOfVotes: 0, option: "  Javascript" });
votation.addVoteOption({ numberOfVotes: 0, option: "  Typescript" });
votation.addVoteOption({ numberOfVotes: 0, option: "  Java" });
votation.addVoteOption({ numberOfVotes: 0, option: "  C#" });

const votingMachine = new VotingMachine();
votingMachine.addVotingPoll(votation);
votingMachine.showSpecificVote(0);

votation.vote(0);
votation.vote(0);
votation.vote(1);
votation.vote(1);
votation.vote(1);
votation.vote(1);
votation.vote(2);
votation.vote(2);
votation.vote(3);
votingMachine.showSpecificVote(0);

const votation2 = new VotingPool(" Qual sua cor favorita?");
votation2.addVoteOption({ numberOfVotes: 0, option: "  Azul" });
votation2.addVoteOption({ numberOfVotes: 0, option: "  Vermelho" });
votation2.addVoteOption({ numberOfVotes: 0, option: "  Verde" });
votation2.addVoteOption({ numberOfVotes: 0, option: "  Amarelo" });

votingMachine.addVotingPoll(votation2);
votingMachine.showSpecificVote(1);

votation2.vote(0);
votation2.vote(0);
votation2.vote(1);
votation2.vote(1);
votation2.vote(2);
votation2.vote(3);
votation2.vote(3);
votation2.vote(3);
votingMachine.showSpecificVote(1);

// Mostrar todos as votações
votingMachine.showVotingPools();
