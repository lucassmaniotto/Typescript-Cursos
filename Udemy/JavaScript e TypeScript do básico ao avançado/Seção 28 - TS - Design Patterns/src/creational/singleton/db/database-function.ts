import { User } from '../interfaces/iUser';

const users: User[] = [];

export const DatabaseFunction = (function () {
  return {
    addUser(user: User): void {
      users.push(user);
    },

    removeUser(index: number): void {
      users.splice(index, 1);
    },

    showUsers(): void {
      users.forEach((user) => {
        console.log(user);
      });
    },
  };
})();
