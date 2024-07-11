let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);

formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
const { email, message } = form.elements;

populateForm();

function handleFormInput(event) {
  formData = { email: email.value.trim(), message: message.value.trim() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  formData = {};
}
