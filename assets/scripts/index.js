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
loginFormContainer.classList.add('login-form-container');
pageHeader.textContent = 'Login to your account';
pageHeader.classList.add('page-header');
emailContainer.classList.add('email-container');
emailLabel.textContent = 'Email Address:';
emailInput.placeholder = 'yourEmail@gmail.com';
emailInput.classList.add('email-input');
passwordContainer.classList.add('password-container');
passwordLabel.textContent = 'Password:';
passwordInput.placeholder = 'Password';
buttonContainer.classList.add('button-container');
loginButton.classList.add('login-button');
loginButton.textContent = 'Login';
createAccountModalButton.classList.add('create-account-modal-button');
createAccountModalButton.textContent = 'Create account';
forgotYourPasswordButton.classList.add('forgot-your-password-button');
forgotYourPasswordButton.textContent = 'Forgot your password?';
loginAsGuestButton.classList.add('login-as-guest-button');
loginAsGuestButton.textContent = 'Login as Guest';

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
