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

// ! Functions

const createAccountModal = () => {
  const modalDiv = document.createElement('div');
  const modalHeaderDiv = document.createElement('div');
  const modalContentDiv = document.createElement('div');
  const closeModalButton = document.createElement('span');
  const formContainer = document.createElement('div');
  const nameContainer = document.createElement('div');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const emailModalContainer = document.createElement('div');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const passwordModalContainer = document.createElement('div');
  const passwordModalLabel = document.createElement('label');
  const passwordModalInput = document.createElement('input');
  const passwordModalConfirmContainer = document.createElement('div');
  const passwordConfirmLabel = document.createElement('label');
  const passwordConfirmInput = document.createElement('input');
  const signupButton = document.createElement('button');

  const startAnimateModal = () => {
    modalDiv.style['animation-name'] = 'animatetop';
    modalDiv.style['animation-duration'] = '0.4s';
  };

  const endAnimateModal = () => {
    modalDiv.style['animation-name'] = 'animatebottom';
    modalDiv.style['animation-duration'] = '0.4s';
  };

  const toggleCreateAccountModalVisibility = () => {
    endAnimateModal();
    const task = async () => {
      await new Promise((r) => setTimeout(r, 400));
      modalDiv.classList.toggle('visible');
    };
    task();
  };

  // signupButton.addEventListener('click', );

  closeModalButton.addEventListener(
    'click',
    toggleCreateAccountModalVisibility
  );

  modalDiv.classList.add('modal');
  modalDiv.classList.add('background-color');
  modalDiv.id = 'myModal';
  modalHeaderDiv.classList.add('modal-header');
  modalHeaderDiv.innerHTML = `<h2>Create Account</h2>`;
  modalContentDiv.classList.add('modal-content');
  closeModalButton.classList.add('close-modal');
  closeModalButton.textContent = 'Already have an account';
  formContainer.classList.add('form-container');
  nameContainer.classList.add('name-container');
  nameLabel.textContent = 'Name:';
  nameInput.placeholder = 'name';
  emailModalContainer.classList.add('email-modal-container');
  emailLabel.textContent = 'Email Address:';
  emailInput.placeholder = 'yourEmail@example.com';
  passwordModalContainer.classList.add('password-modal-container');
  passwordModalLabel.textContent = 'Password:';
  passwordModalInput.type = 'password';
  passwordModalInput.placeholder = '•••••••••';
  passwordModalConfirmContainer.classList.add(
    'password-modal-confirm-container'
  );
  passwordConfirmLabel.textContent = 'Confirm Password:';
  passwordConfirmInput.type = 'password';
  passwordConfirmInput.placeholder = '•••••••••';
  signupButton.classList.add('signup-button');
  signupButton.textContent = 'Sign Up';

  nameContainer.append(nameLabel, nameInput);
  emailModalContainer.append(emailLabel, emailInput);
  passwordModalContainer.append(passwordModalLabel, passwordModalInput);
  passwordModalConfirmContainer.append(
    passwordConfirmLabel,
    passwordConfirmInput
  );
  formContainer.append(
    nameContainer,
    emailModalContainer,
    passwordModalContainer,
    passwordModalConfirmContainer,
    signupButton
  );

  modalContentDiv.append(formContainer, closeModalButton);
  modalDiv.append(modalHeaderDiv, modalContentDiv);
  body.appendChild(modalDiv);

  startAnimateModal();
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

// ! Event Listeners

loginButton.addEventListener('click', loginHandler);
createAccountModalButton.addEventListener('click', createAccountHandler);
forgotYourPasswordButton.addEventListener('click', forgotYourPasswordHandler);
loginAsGuestButton.addEventListener('click', loginAsGuestHandler);

// ! Element Attributes

body.classList.add('background-color');
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

// ! Page Layout

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
