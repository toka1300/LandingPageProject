// Grabbing input from these
const emailInput = document.getElementById("Email");
const nameInput = document.getElementById("name");

// Data targets to insert welcome message
const message = document.getElementById("submitModalLabel");
const body = document.getElementById("body");

// Setting submission event variable
const submission = document.getElementById("btn-submit");
const formCheck = document.getElementById("btn-submit");

submission.addEventListener("click", (event) => {
  Email = (emailInput.value);
  Name = (nameInput.value);
  Name = Name.split(' ')[0]
  Domain = Email.substring(Email.indexOf('@') + 1);
  Domain = Domain.split('.')[0]

  message.insertAdjacentHTML("beforeend", Name.concat("!"))
  body.insertAdjacentHTML("beforeend", Domain.concat(" account."))
});
