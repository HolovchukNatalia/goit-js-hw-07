const form = document.querySelector(".login-form");
form.style.padding = "24px";
form.style.borderRadius = "8px";
form.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
form.style.width = "360px";

const inputs = document.querySelectorAll(".login-form input");
inputs.forEach((input) => {
  input.style.width = "100%";
  input.style.padding = "10px";
  input.style.marginBottom = "15px";
  input.style.border = "1px solid";
  input.style.borderRadius = "4px";
});

const button = document.querySelector(".login-form button");
button.style.padding = "8px 16px";
button.style.backgroundColor = "#4E75FF";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.fontSize = "16px";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  form.reset();
});
