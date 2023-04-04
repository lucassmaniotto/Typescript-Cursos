type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
}

// Os tipos não foram definidos, mas o TS consegue inferir o tipo
const dbUser = {
    username: 'John',
    password: '123'
}

const sentUser = {
    username: 'John',
    password: '123',
    permissions: 'admin' // O TS não retorna erro, pois só verifica os conteúdos da interface
}

const loggedIn = verifyUser(dbUser, sentUser);
console.log(loggedIn);
