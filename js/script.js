var btn = document.querySelector(button);

checkValidation = (evt) => {
  var email = document.getElementById("mail");

    if (email.validity.typeMismatch) {
      email.setCustomValidity("I expect an e-mail, darling!");
    } else {
      email.setCustomValidity("");
    }

}

btn.addEventListener('click', checkValidation);

console.log(9997);