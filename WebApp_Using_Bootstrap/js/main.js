const html = document.getElementsByTagName("html");
const mode = document.getElementById("mode");
const header = document.getElementById("header");

// switch mode
mode.addEventListener("click", () => {
  const mode = html[0].getAttribute("data-bs-theme");
  if (mode === "light") {
    html[0].setAttribute("data-bs-theme", "dark");
    header.style.background = "#000";
  } else {
    html[0].setAttribute("data-bs-theme", "light");
    header.style.background = "#edf2fc";
  }
});

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputs = form.querySelectorAll('input, select');

  let isValid = true;
  inputs.forEach(input => {
    if (!input.value) {
      isValid = false;
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  });

  if (isValid) {
    showAlert('success', 'Form submitted successfully!');
    form.reset();
  } else {
    showAlert('danger', 'Please fill in all the required fields.');
  }
}

function showAlert(type, message) {
  const alertElement = document.createElement('div');
  alertElement.className = `alert alert-${type} mt-3`;
  alertElement.textContent = message;

  const container = document.querySelector('.container');
  container.appendChild(alertElement);

  setTimeout(function () {
    alertElement.remove();
  }, 3000);
}