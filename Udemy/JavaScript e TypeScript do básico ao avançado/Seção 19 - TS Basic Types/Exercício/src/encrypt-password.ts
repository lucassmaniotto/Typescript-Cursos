const CryptoJS = require('crypto-js');

const password = document.querySelector('#password') as HTMLInputElement;
const password2 = document.querySelector('#password2') as HTMLInputElement;

function generateSalt(): string {
  return CryptoJS.lib.WordArray.random(128 / 8).toString();
}

function encryptPassword(input: HTMLInputElement): void {
  const salt = generateSalt();
  const encryptedPassword = CryptoJS.PBKDF2(input.value, salt, { keySize: 512 / 32, iterations: 1000 }).toString();
  input.value = encryptedPassword;
}

export { encryptPassword };
