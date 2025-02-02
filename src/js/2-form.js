const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', event => {
  if (event.target.name === 'email' || event.target.name === 'message') {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

window.addEventListener('load', () => {
  const savedFormData = localStorage.getItem(localStorageKey);

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    document.querySelector('input[name="email"]').value = parsedFormData.email;
    document.querySelector('textarea[name="message"]').value =
      parsedFormData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  }
});
