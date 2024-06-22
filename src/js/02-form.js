// const form = document.querySelector('.feedback-form');
// form.addEventListener('submit', handleGetInput);
// function handleGetInput(event) {
//   event.preventDefault();
//   const { email, message } = event.currentTarget.elements;

//   if (email.value && message.value) {
//     const data = {
//       email: email.value,
//       password: password.value,
//     };
//     console.log(data);
//   } else {
//     alert('All form fields must be filled in');
//   }
//   form.reset();
// }
const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
form.addEventListener('submit', handleGetInput);
function handleGetInput(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;

  if (email.value && message.value) {
    formData.email = email.value;
    formData.message = message.value;
  } else {
    alert('Fill please all fields');
  }
  console.log(typeof formData.email);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  form.reset();
}
