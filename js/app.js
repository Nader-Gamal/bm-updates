// stop default reload when click button
function handleSubmit(event) {
  event.preventDefault();
}
// store sign-in variables
const signInUser = document.getElementById("signInUser");
const signInPassword = document.getElementById("signInPassword");
// validation
const emailValidation = /^\d{4}$/;

// main function for sign in
function loginFunction() {
  login();
}

// login in function
function login() {
  if (
    emailValidation.test(signInUser.value) &&
    signInPassword.value == "19888"
  ) {
    document.getElementById("invalidUserOrPassword").style.display = "none";
    window.location.href = "./home.html";
    console.log("done");
  } else {
    document.getElementById("invalidUserOrPassword").style.display = "block";
    console.log("flase");
  }
}

function hideOtherMessages(...messageIds) {
  messageIds.forEach(
    (id) => (document.getElementById(id).style.display = "none")
  );
  console.log(signInUser.value);
}
