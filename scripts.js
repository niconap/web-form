const Email = function (id, errorSpan) {
  let emailId = id;
  let emailSpan = document.getElementById(errorSpan);
  let input = document.getElementById(emailId);
  let obj = this;

  this.init = function () {
    input.addEventListener("input", function () {
      if (input.validity.valid) {
        emailSpan.innerHTML = "";
      } else {
        obj.showError();
      }
    });
  };

  this.showError = function () {
    if (input.validity.typeMismatch) {
      emailSpan.textContent = "Please enter a valid e-mail address.";
    } else if (input.validity.valueMissing) {
      emailSpan.textContent = "Please enter an e-mail address.";
    }
  };
};

let emailinput = new Email("email", "emailspan");
emailinput.init();
