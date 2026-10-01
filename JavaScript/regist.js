// Input - Allowed characters
const form = document.getElementById('form');
const loginInput = document.getElementById('login');
const passInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  if (loginInput.value.trim().length < 4) {
    event.preventDefault();
    alert('Login must contain at least 4 characters!');
  };
  if (passInput.value.trim().length < 8) {
    event.preventDefault();
    alert('Password must be longer than 8 characters!')
  }
});

loginInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
});

passInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^a-zA-Z0-9_\-+]/g, '');
});

// Hide 👁️ Password
const passEyes = document.querySelectorAll('.eye');
const eyeOn = '../img/Registration/R_icons/eye.svg';
const eyeOff = '../img/Registration/R_icons/eye-off.svg';

passEyes.forEach((passEye) => {
  passEye.addEventListener('click', (event) => {

    const currentInput = event.target.closest('.box_password').querySelector('input');
    
    if (currentInput.type === 'password') {
      currentInput.type = 'text';
      event.target.src = eyeOff;
    } else {
      currentInput.type = 'password';
      event.target.src = eyeOn;
    }
  });
});

// S I G N  U P
const signIn = document.getElementById('signInBlock');
const signUp = document.getElementById('signUpBlock');

const btnGoToSignUp = document.getElementById('textSignIn'); 
const btnGoToSignIn = document.getElementById('textSignUp');

btnGoToSignUp.addEventListener('click', (e) => {
  e.preventDefault();
  signIn.style.display = 'none';
  signUp.style.display = 'flex';
});

btnGoToSignIn.addEventListener('click', (e) => {
  e.preventDefault();
  signUp.style.display = 'none';
  signIn.style.display = 'flex';
});

