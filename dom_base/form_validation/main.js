const form = document.getElementById("registerForm");
const inputs = form.querySelectorAll("input");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  inputs.forEach(input => {
    const errorElement = input.parentElement.querySelector('.error');

    if (!input.validity.valid) {
    
      isValid = false;
      input.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
      if (errorElement) errorElement.style.display = 'block'; 
    } 
    
    else {
      input.classList.remove('invalid');
      input.setAttribute('aria-invalid', 'false');
      if (errorElement) errorElement.style.display = 'none'; 
    }
  });

  if (isValid) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Данные:', data);
  } else {
    console.log('Не валидна');
  }
});