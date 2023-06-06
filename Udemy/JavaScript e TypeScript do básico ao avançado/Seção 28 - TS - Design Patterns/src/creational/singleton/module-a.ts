import { DatabaseModule } from './db/database-module';

const databaseClassic = DatabaseModule;
databaseClassic.addUser({ name: 'Miles Morales', age: 17 });
databaseClassic.addUser({ name: 'Peter Parker', age: 26 });
databaseClassic.addUser({ name: 'Gwen Stacy', age: 19 });

export { databaseClassic, DatabaseModule };
