const Validator = function (id, errorSpan, type) {
  let error = document.getElementById(errorSpan);
  let input = document.getElementById(id);
  let inputtype = type;
  let obj = this;

  this.init = function () {
    input.addEventListener("input", function () {
      if (type != "validpassword") {
        if (input.validity.valid) {
          error.innerHTML = "";
        } else {
          obj.showError();
        }
        if (type == "password") {
          let validpassword = document.getElementById("validpassword");
          let error = document.getElementById("validpasswordspan");
          if (validpassword.value != input.value) {
            error.textContent = "The passwords don't match.";
          } else {
            error.textContent = "";
          }
        }
      } else {
        let password = document.getElementById("password");
        if (password.value != input.value) {
          error.textContent = "The passwords don't match.";
        } else {
          error.textContent = "";
        }
      }
    });
  };

  this.showError = function () {
    if (inputtype == "email") {
      if (input.validity.typeMismatch) {
        error.textContent = "Please enter a valid e-mail address.";
      } else if (input.validity.valueMissing) {
        error.textContent = "Please enter an e-mail address.";
      }
    } else if (inputtype == "country") {
      if (input.validity.tooLong) {
        error.textContent = "Please enter less than 20 characters.";
      } else if (input.validity.tooShort) {
        error.textContent = "Please enter more than 3 characters.";
      } else if (input.validity.valueMissing) {
        error.textContent = "Please enter a country.";
      }
    } else if (inputtype == "zipcode") {
      if (input.validity.patternMismatch) {
        error.textContent = "Please enter a valid zipcode.";
      } else if (input.validity.valueMissing) {
        error.textContent = "Please enter a zipcode.";
      } else if (input.validity.tooLong) {
        error.textContent = "Please enter less than 10 characters.";
      } else if (input.validity.tooShort) {
        error.textContent = "Please enter more than 3 characters.";
      }
    } else if (inputtype == "password") {
      if (input.validity.patternMismatch) {
        error.textContent =
          "Must contain at least one number, one uppercase and lowercase letter and at least 8 or more characters.";
      } else if (input.validity.valueMissing) {
        error.textContent = "Please enter a password.";
      }
    }
  };
};

let email = new Validator("email", "emailspan", "email");
email.init();

let country = new Validator("country", "countryspan", "country");
country.init();

let zipcode = new Validator("zipcode", "zipcodespan", "zipcode");
zipcode.init();

let password = new Validator("password", "passwordspan", "password");
password.init();

let validpassword = new Validator(
  "validpassword",
  "validpasswordspan",
  "validpassword"
);
validpassword.init();
