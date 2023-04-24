const emailInput = document.querySelector('input[type="email"]');
const passInput = document.querySelector('input[type="password"]');
const emailIcon = document.querySelector(".icon-email");
const passIcon = document.querySelector(".icon-pass");

emailInput.addEventListener("focus", () => {
  emailIcon.src = "images/mail-focus.svg";
});

emailInput.addEventListener("blur", () => {
  emailIcon.src = "images/mail.svg";
});

passInput.addEventListener("focus", () => {
  passIcon.src = "images/lock-focus.svg";
});

passInput.addEventListener("blur", () => {
  passIcon.src = "images/lock.svg";
});

const eyeIcon = document.querySelector(".icon-eye");

eyeIcon.addEventListener("click", () => {
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
});
