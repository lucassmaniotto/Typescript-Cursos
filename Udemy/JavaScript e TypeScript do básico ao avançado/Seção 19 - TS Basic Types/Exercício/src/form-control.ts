import Swal from 'sweetalert2';
import { encryptPassword } from './encrypt-password';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('#username') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const password = document.querySelector('#password') as HTMLInputElement;
const password2 = document.querySelector('#password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkUsername(username);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  checkPasswordLength(password);
  checkPasswordStrength(password);
  checkForEmptyFields(username, email, password, password2);

  if (isFormValid(this)) {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Formulário enviado com sucesso!',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then(() => {
      encryptPassword(password);
      encryptPassword(password2);
      sendForm(event);
      clearFields(username, email, password, password2);
    });
  }
});

function sendForm(event: Event): void {
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://httpbin.org/post');
  xhr.send(formData);
}

function clearFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach(input => {
    input.value = '';
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  const errorMessages = form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`);
  errorMessages.forEach(element => {
    element.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function showErrorMessage(input: HTMLInputElement, message: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;

  errorMessage.innerText = message;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach(input => {
    if (!input.value) {
      showErrorMessage(input, 'Este campo não pode ficar vazio');
    }
  });
}

function checkUsername(input: HTMLInputElement): void {
  const username = input.value;
  if (username.length < 3 || username.length > 12) {
    showErrorMessage(input, 'Usuário deve ter entre 3 e 12 caracteres');
  }
}

function checkEmail(input: HTMLInputElement): void {
  const regex = /\S+@\S+\.\S+/;
  const email = input.value;
  if (!regex.test(email)) {
    showErrorMessage(input, 'Email inválido');
  }
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não são iguais');
    showErrorMessage(password2, 'Senhas não são iguais');
  }
}

function checkPasswordLength(input: HTMLInputElement): void {
  const password = input.value;
  if (password.length < 6 || password.length > 12) {
    showErrorMessage(input, 'Senha deve ter entre 6 e 12 caracteres');
  }
}

function checkPasswordStrength(input: HTMLInputElement): void {
  const password = input.value;
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
  if (!regex.test(password)) {
    showErrorMessage(input, 'A senha deve ter pelo menos um número, uma letra minúscula, uma letra maiúscula e pelo menos 6 caracteres');
  }
}

function isFormValid(form: HTMLFormElement): boolean {
  let isValid = true;
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach(() => {
    isValid = false;
  });
  return isValid;
}
