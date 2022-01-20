// ! Global Variables
const body = document.body;
const loginContainer = document.createElement('div');
const loginFormContainer = document.createElement('div');
const pageHeader = document.createElement('h1');
const emailContainer = document.createElement('div');
const emailLabel = document.createElement('label');
const emailInput = document.createElement('input');
const passwordContainer = document.createElement('div');
const passwordLabel = document.createElement('label');
const passwordInput = document.createElement('input');
const buttonContainer = document.createElement('div');
const loginButton = document.createElement('button');
const createAccountModalButton = document.createElement('button');
const forgotYourPasswordButton = document.createElement('button');
const loginAsGuestButton = document.createElement('button');

const createAccountModal = () => {};

const forgotYourPasswordModal = () => {};

// const loginAsGuest =

const loginHandler = (email) => {
  return;
};

const createAccountHandler = () => {
  return;
};

const forgotYourPasswordHandler = () => {
  return;
};

const loginAsGuestHandler = () => {
  return;
};

loginButton.addEventListener('click', loginHandler);
createAccountModalButton.addEventListener('click', createAccountHandler);
forgotYourPasswordButton.addEventListener('click', forgotYourPasswordHandler);
loginAsGuestButton.addEventListener('click', loginAsGuestHandler);

loginContainer.classList.add('login-container');
pageHeader.textContent = 'Log into your account';
pageHeader.classList.add('page-header');
emailContainer.classList.add('email-container');
passwordContainer.classList.add('password-container');
buttonContainer.classList.add('button-container');
loginButton.classList.add('login-button');
createAccountModalButton.classList.add('create-account-modal-button');
forgotYourPasswordButton.classList.add('forgot-your-password-button');
loginAsGuestButton.classList.add('login-as-guest-button');

emailContainer.append(emailLabel, emailInput);
passwordContainer.append(passwordLabel, passwordInput);
buttonContainer.append(
  loginButton,
  createAccountModalButton,
  forgotYourPasswordButton,
  loginAsGuestButton
);
loginFormContainer.append(emailContainer, passwordContainer, buttonContainer);
loginContainer.append(pageHeader, loginFormContainer);
body.appendChild(loginContainer);
