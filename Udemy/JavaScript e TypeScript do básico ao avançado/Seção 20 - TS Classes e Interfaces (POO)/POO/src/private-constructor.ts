export class Database {
  private static database: Database;

  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`\nConnecting to ${this.host}...`);
    console.log(`User: ${this.user}\nPassword: ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if(Database.database) {
      console.log('Returning instance already created...');
      return Database.database;
    }
    console.log('Creating new instance...');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}
const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

console.log(db1 === db2);
