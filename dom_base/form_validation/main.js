const form = document.getElementById("registerForm");
const inputs = form.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", () => validateField(input));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  inputs.forEach((input) => {
    const valid = validateField(input);
    if (!valid) isValid = false;
  });

  if (!isValid) return;

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log(data);
});

function validateField(input) {
  const field = input.closest(".field");
  const error = field.querySelector(".error");

  if (!input.validity.valid) {
    error.style.display = "block";
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
    return false;
  }

  error.style.display = "none";
  input.classList.remove("invalid");
  input.setAttribute("aria-invalid", "false");

  return true;
}
