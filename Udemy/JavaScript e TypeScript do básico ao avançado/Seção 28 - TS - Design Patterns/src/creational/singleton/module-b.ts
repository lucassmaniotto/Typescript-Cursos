import { DatabaseModule } from './db/database-module';
import { DatabaseModule as dbFromModuleA } from './module-a';

const databaseModule = DatabaseModule;
databaseModule.addUser({ name: "Miguel O'Hara", age: 32 });
databaseModule.addUser({ name: 'Peter Porker', age: 15 });
databaseModule.addUser({ name: 'Hobbie Brown', age: 21 });
databaseModule.showUsers();

console.log('----------------------------------------');
console.log(databaseModule === dbFromModuleA);
