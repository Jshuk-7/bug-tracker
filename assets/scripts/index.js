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
const passwordVisibilityCheckboxContainer = document.createElement('div');
const passwordVisibilityCheckboxLabel = document.createElement('label');
const passwordVisibilityCheckbox = document.createElement('input');
const buttonContainer = document.createElement('div');
const loginButton = document.createElement('button');
const createAccountModalButton = document.createElement('button');
const forgotYourPasswordButton = document.createElement('button');
const loginAsGuestButton = document.createElement('button');

const createAccountModal = () => {
  const modalDiv = document.createElement('div');
  const modalContentDiv = document.createElement('div');
  const closeModalButton = document.createElement('span');

  const formContainer = document.createElement('div');

  const nameContainer = document.createElement('div');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');

  const emailContainer = document.createElement('div');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');

  const passwordContainer = document.createElement('div');
  const passwordModalLabel = document.createElement('label');
  const passwordModalInput = document.createElement('input');

  const passwordConfirmContainer = document.createElement('div');
  const passwordConfirmLabel = document.createElement('label');
  const passwordConfirmInput = document.createElement('input');

  const signupButton = document.createElement('button');

  modalDiv.classList.add('modal');
  modalDiv.id = 'myModal';
  modalDiv.style['z-index'] = 2;
  modalDiv.style['position'] = 'absolute';
  modalDiv.style['width'] = '100vw';
  modalDiv.style['height'] = '100vh';
  modalDiv.style['background'] =
    'linear-gradient(to right, rgb(60, 60, 255) 0%, white 37%, white 50%, white 63%, rgb(60, 60, 255) 100%';
  modalContentDiv.classList.add('modal-content');
  closeModalButton.classList.add('close');
  closeModalButton.textContent = 'Already have an account';
  formContainer.classList.add('form-container');
  nameContainer.classList.add('name-container');
  nameLabel.textContent = 'Name:';
  nameInput.placeholder = 'name';
  emailContainer.classList.add('email-container');
  emailLabel.textContent = 'Email Address:';
  emailInput.placeholder = 'yourEmail@example.com';
  passwordContainer.classList.add('password-container');
  passwordModalLabel.textContent = 'Password:';
  passwordModalInput.type = 'password';
  passwordModalInput.placeholder = '•••••••••';
  passwordConfirmContainer.classList.add('password-confirm-container');
  passwordConfirmLabel.textContent = 'Confirm Password:';
  passwordConfirmInput.type = 'password';
  passwordConfirmInput.placeholder = '•••••••••';
  signupButton.classList.add('signup-button');
  signupButton.textContent = 'Sign Up';

  nameContainer.append(nameLabel, nameInput);
  emailContainer.append(emailLabel, emailInput);
  passwordContainer.append(passwordModalLabel, passwordModalInput);
  passwordConfirmContainer.append(passwordConfirmLabel, passwordConfirmInput);
  formContainer.append(
    nameContainer,
    emailContainer,
    passwordContainer,
    passwordConfirmContainer,
    signupButton
  );
  modalContentDiv.append(formContainer, closeModalButton);
  modalDiv.appendChild(modalContentDiv);
  body.appendChild(modalDiv);
};

const forgotYourPasswordModal = () => {};

// const loginAsGuest =

const loginHandler = (email) => {
  return;
};

const createAccountHandler = () => {
  createAccountModal();
};

const forgotYourPasswordHandler = () => {
  return;
};

const loginAsGuestHandler = () => {
  return;
};

const togglePasswordVisibility = () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordVisibilityCheckboxLabel.textContent = 'hide password';
  } else {
    passwordInput.type = 'password';
    passwordVisibilityCheckboxLabel.textContent = 'show password';
  }
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
emailInput.placeholder = 'yourEmail@example.com';
emailInput.classList.add('email-input');
passwordContainer.classList.add('password-container');
passwordLabel.textContent = 'Password:';
passwordInput.type = 'password';
passwordInput.placeholder = '•••••••••';
passwordVisibilityCheckboxContainer.classList.add(
  'password-vis-checkbox-container'
);
passwordVisibilityCheckbox.type = 'checkbox';
passwordVisibilityCheckbox.onclick = togglePasswordVisibility;
passwordVisibilityCheckboxLabel.textContent = 'show password';
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
passwordVisibilityCheckboxContainer.append(
  passwordVisibilityCheckboxLabel,
  passwordVisibilityCheckbox
);
passwordContainer.append(
  passwordLabel,
  passwordInput,
  passwordVisibilityCheckboxContainer
);
buttonContainer.append(
  loginButton,
  createAccountModalButton,
  forgotYourPasswordButton,
  loginAsGuestButton
);
loginFormContainer.append(emailContainer, passwordContainer, buttonContainer);
loginContainer.append(pageHeader, loginFormContainer);
body.appendChild(loginContainer);
