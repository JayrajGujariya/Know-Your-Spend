// let title = document.getElementById("title");
// let nameField = document.getElementById("nameField");
// let signUpBtn = document.getElementById("signUpbtn");
let signInBtn = document.getElementById("signInbtn");

// signUpBtn.onclick = function () {
//   nameField.style.height="auto";
//   nameField.style.display="block";
//   signInBtn.classList.add("disable");
//   signUpBtn.classList.remove("disable");
//   title.innerHTML="<h1>Register</h1>"
// };

// signInBtn.onclick = function () {
//   nameField.style.height="0px";
//   nameField.style.display="none";
//   signInBtn.classList.remove("disable");
//   signUpBtn.classList.add("disable");
//   title.innerHTML="<h1>Login</h1>"
//   validate();
// };



signInBtn.addEventListener('click', function() {
  // Ensure elements exist before accessing values
  const emailField = document.getElementById("emailField");
  const passwordField = document.getElementById("passwordField");

  if (emailField && passwordField) {
    const email = emailField.value;
    const password = passwordField.value;

    // Replace with server-side authentication
    const validEmail = 'jayraj@123';
    const validPassword = '123';

    if (email === validEmail && password === validPassword) {
      window.location.assign('./index.html');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  } else {
    console.error("Error: Email or password field not found.");
  }
});


