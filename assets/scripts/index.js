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
  // ! Create Account Modal Global Variables

  const modalDiv = document.createElement('div');
  const modalHeaderDiv = document.createElement('div');
  const modalContentDiv = document.createElement('div');
  const closeModalButton = document.createElement('span');
  const formContainer = document.createElement('div');
  const nameContainer = document.createElement('div');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const emailModalContainer = document.createElement('div');
  const emailModalLabel = document.createElement('label');
  const emailModalInput = document.createElement('input');
  const passwordModalContainer = document.createElement('div');
  const passwordModalLabel = document.createElement('label');
  const passwordModalInput = document.createElement('input');
  const passwordModalConfirmContainer = document.createElement('div');
  const passwordConfirmLabel = document.createElement('label');
  const passwordConfirmInput = document.createElement('input');
  const passwordModalVisibilityCheckboxContainer =
    document.createElement('div');
  const passwordModalVisibilityCheckboxLabel = document.createElement('label');
  const passwordModalVisibilityCheckbox = document.createElement('input');
  const sendEmailButton = document.createElement('button');

  // ! Functions

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

  const toggleCreateAccountPasswordVisibility = () => {
    if (
      passwordModalInput.type === 'password' &&
      passwordConfirmInput.type === 'password'
    ) {
      passwordModalInput.type = 'text';
      passwordConfirmInput.type = 'text';
      passwordModalVisibilityCheckboxLabel.textContent = 'hide password';
    } else {
      passwordModalInput.type = 'password';
      passwordConfirmInput.type = 'password';
      passwordModalVisibilityCheckboxLabel.textContent = 'show password';
    }
  };

  // sendEmailButton.addEventListener('click', );
  // ! Event Listeners

  closeModalButton.addEventListener(
    'click',
    toggleCreateAccountModalVisibility
  );

  // ! Element Attributes

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
  emailModalLabel.textContent = 'Email Address:';
  emailModalInput.placeholder = 'yourEmail@example.com';
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
  passwordModalVisibilityCheckboxContainer.classList.add(
    'password-modal-vis-checkbox-container'
  );
  passwordModalVisibilityCheckbox.type = 'checkbox';
  passwordModalVisibilityCheckbox.onclick =
    toggleCreateAccountPasswordVisibility;
  passwordModalVisibilityCheckboxLabel.textContent = 'show password';
  sendEmailButton.classList.add('signup-button');
  sendEmailButton.innerHTML = 'Sign Up<i class="fas fa-user-plus"></i>';

  // ! Modal Layout

  nameContainer.append(nameLabel, nameInput);
  emailModalContainer.append(emailModalLabel, emailModalInput);
  passwordModalContainer.append(passwordModalLabel, passwordModalInput);
  passwordModalConfirmContainer.append(
    passwordConfirmLabel,
    passwordConfirmInput
  );
  passwordModalVisibilityCheckboxContainer.append(
    passwordModalVisibilityCheckbox,
    passwordModalVisibilityCheckboxLabel
  );
  formContainer.append(
    nameContainer,
    emailModalContainer,
    passwordModalContainer,
    passwordModalConfirmContainer,
    passwordModalVisibilityCheckboxContainer,
    sendEmailButton
  );
  modalContentDiv.append(formContainer, closeModalButton);
  modalDiv.append(modalHeaderDiv, modalContentDiv);
  body.appendChild(modalDiv);

  startAnimateModal();

  // ! End of function
};

const forgotYourPasswordModal = () => {
  // ! Forgot Your Password Modal Global Variables

  const modalDiv = document.createElement('div');
  const modalHeaderDiv = document.createElement('div');
  const modalContentDiv = document.createElement('div');
  const closeModalButton = document.createElement('span');
  const formContainer = document.createElement('div');
  const emailModalContainer = document.createElement('div');
  const emailModalLabel = document.createElement('label');
  const emailModalInput = document.createElement('input');
  const sendEmailButton = document.createElement('button');

  // ! Functions

  const startAnimateModal = () => {
    modalDiv.style['animation-name'] = 'animatetop';
    modalDiv.style['animation-duration'] = '0.4s';
  };

  const endAnimateModal = () => {
    modalDiv.style['animation-name'] = 'animatebottom';
    modalDiv.style['animation-duration'] = '0.4s';
  };

  const toggleForgotYourPasswordModalVisibility = () => {
    endAnimateModal();
    const task = async () => {
      await new Promise((r) => setTimeout(r, 400));
      modalDiv.classList.toggle('visible');
    };
    task();
  };

  // ! Event Listeners

  closeModalButton.addEventListener(
    'click',
    toggleForgotYourPasswordModalVisibility
  );

  // ! Element Attributes

  modalDiv.classList.add('modal');
  modalDiv.classList.add('background-color');
  modalDiv.id = 'myModal';
  modalHeaderDiv.classList.add('modal-header');
  modalHeaderDiv.innerHTML = `<h2>Reset Password</h2>`;
  modalContentDiv.classList.add('modal-content');
  closeModalButton.classList.add('close-modal');
  closeModalButton.textContent = 'Nevermind I figured it out';
  closeModalButton.style['bottom'] = '4rem';
  formContainer.classList.add('form-container');
  emailModalContainer.classList.add('email-modal-container');
  emailModalLabel.textContent = 'Email Address:';
  emailModalInput.placeholder = 'yourEmail@example.com';
  sendEmailButton.classList.add('send-email-button');
  sendEmailButton.innerHTML = 'Send Email<i class="fas fa-paper-plane"></i>';

  // ! Modal Layout

  emailModalContainer.append(emailModalLabel, emailModalInput);
  formContainer.append(emailModalContainer, sendEmailButton);
  modalContentDiv.append(formContainer, closeModalButton);
  modalDiv.append(modalHeaderDiv, modalContentDiv);
  body.appendChild(modalDiv);
  startAnimateModal();

  // ! End of function
};

const loginAsGuest = () => {
  // ! Login As Guest Global Variables

  const modalDiv = document.createElement('div');
  const mainContent = document.createElement('div');
  const sideBar = document.createElement('div');
  const sideButtonContainer = document.createElement('div');
  const toggleSidebarButton = document.createElement('button');
  const userInfoButton = document.createElement('button');
  const homeButton = document.createElement('button');
  const addIssueButton = document.createElement('button');
  const allIssuesButton = document.createElement('button');

  // ! Functions

  const loginAlert = () => {
    const alertContainer = document.createElement('div');
    const closeAlertButton = document.createElement('span');

    const closeAlert = () => {
      alertContainer.style['animation'] = 'animateFromTop';
      alertContainer.style['animation-duration'] = '0.4s';
      const removeAlertContainer = async () => {
        await new Promise((r) => setTimeout(r, 400));
        alertContainer.style.display = 'none';
      };
      removeAlertContainer();
    };

    alertContainer.classList.add('alert');
    alertContainer.textContent = 'Successfully Logged In As Guest...';
    alertContainer.style['animation'] = 'animatetop';
    alertContainer.style['animation-duration'] = '0.4s';
    closeAlertButton.classList.add('close-alert-button');
    closeAlertButton.onclick = closeAlert;
    closeAlertButton.innerHTML = '&times';
    alertContainer.appendChild(closeAlertButton);
    body.append(alertContainer);
    const task = async () => {
      await new Promise((r) => setTimeout(r, 15000));
      alertContainer.remove();
    };
    task();
  };

  const showLoggedInPage = () => {
    loginContainer.style['display'] = 'none';
    loginAlert();
    const task = async () => {
      await new Promise((r) => setTimeout(r, 5000));
      body.classList.remove('background-color');
      sideButtonContainer.append(
        toggleSidebarButton,
        userInfoButton,
        homeButton,
        addIssueButton,
        allIssuesButton
      );
      sideBar.append(sideButtonContainer);
      mainContent.append('hello');
      body.append(sideBar, mainContent);
    };
    task();
  };

  const toggleSidebar = () => {
    sideBar.classList.toggle('small-width');
  };

  // ! Element Attributes

  modalDiv.classList.add('modal-div-logged-in');
  mainContent.classList.add('main-content-logged-in');
  sideBar.classList.add('sidebar-logged-in');
  sideButtonContainer.classList.add('sidebar-button-container');
  toggleSidebarButton.classList.add('toggle-sidebar-button');
  toggleSidebarButton.onclick = toggleSidebar;
  toggleSidebarButton.innerHTML = `<i class="fas fa-align-justify"></i>`;
  userInfoButton.classList.add('sidebar-buttons');
  userInfoButton.innerHTML = `<i class="fas fa-user-tie"></i>`;
  homeButton.classList.add('sidebar-buttons');
  homeButton.innerHTML = `<i class="fas fa-home"></i>`;
  addIssueButton.classList.add('sidebar-buttons');
  addIssueButton.innerHTML = `<i class="fas fa-plus-circle"></i>`;
  allIssuesButton.classList.add('sidebar-buttons');
  allIssuesButton.innerHTML = `<i class="fas fa-file-alt"></i>`;

  // ! Page Layout

  showLoggedInPage();

  // ! End of function
};

const checkInputValues = () => {
  if (emailInput.value !== '' && passwordInput.value !== '') {
    return;
  } else {
    alert('Please type in your valid email and password to login.');
  }
};

const loginHandler = () => {
  checkInputValues();
  return;
};

const createAccountHandler = () => {
  createAccountModal();
};

const forgotYourPasswordHandler = () => {
  forgotYourPasswordModal();
};

const loginAsGuestHandler = () => {
  loginAsGuest();
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
loginButton.innerHTML = `Login<i class="fas fa-sign-in-alt"></i>`;
createAccountModalButton.classList.add('create-account-modal-button');
createAccountModalButton.textContent = 'Create account';
forgotYourPasswordButton.classList.add('forgot-your-password-button');
forgotYourPasswordButton.textContent = 'Forgot your password?';
loginAsGuestButton.classList.add('login-as-guest-button');
loginAsGuestButton.textContent = 'Login as Guest';

// ! Home Page Layout

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
