import throttle from 'lodash.throttle';

const input = document.querySelector('.feedback-form');

input.addEventListener('input', throttle(saveInput, 500));

function saveInput() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: input.email.value,
      message: input.message.value,
    }),
  );
}

try {
  input.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  input.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
} catch {}

input.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  input.reset();
}
