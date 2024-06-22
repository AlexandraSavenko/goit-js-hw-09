const formData = {
  email: '',
  message: '',
};
const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input[type="email"]');
const textarea = document.querySelector(
  '.feedback-form textarea[name="message"]'
);
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(LS_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    formData.email = email;
    formData.message = message;
    input.value = email;
    textarea.value = message;
  }
});
form.addEventListener('input', handlerInput);
function handlerInput(event) {
  if (event.target === input) {
    formData.email = event.target.value;
  } else {
    formData.message = event.target.value;
  }
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', handleGetInput);
function handleGetInput(event) {
  event.preventDefault();
  const emailValue = input.value.trim();
  const messageValue = textarea.value.trim();
  if (!emailValue || !messageValue) {
    alert('Fill please all fields');
    return;
  }
  formData.email = emailValue;
  formData.message = messageValue;
  console.table(formData);
  form.reset();
  localStorage.removeItem(LS_KEY);
}
