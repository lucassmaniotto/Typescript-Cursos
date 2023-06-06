import { User } from '../interfaces/iUser';

export class DatabaseClassic {
  private static _instance?: DatabaseClassic;
  private users: User[] = [];
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static get instance(): DatabaseClassic {
    if (!DatabaseClassic._instance) {
      DatabaseClassic._instance = new DatabaseClassic();
    }
    return DatabaseClassic._instance;
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  public showUsers(): void {
    this.users.forEach((user) => {
      console.log(user);
    });
  }
}
