// Google Sign-In Button
var googleSignInButton = document.getElementById('googleSignIn');

// Google Sign-In event listener
googleSignInButton.addEventListener('click', function() {
  var googleProvider = new firebase.auth.GoogleAuthProvider();

  // Sign in with Google popup
  firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
      // User signed in
      var user = result.user;
      console.log("User signed in:", user);

      displayUserInfo(user);
    })
    .catch(function(error) {
      // Handle errors
      console.log("Sign in error:", error);
    });
});

const githubSigninButton = document.getElementById('githubSignin');
  githubSigninButton.addEventListener('click', function() {
  console.log("github button clicked ok ");
  const githubProvider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithPopup(githubProvider)
    .then(function(result) {
      const user = result.user;
      console.log("User signed in:", user);

      displayUserInfo(user);
    })
    .catch(function(error) {
      console.log("Sign in error:", error);
    });
}); // Added closing parenthesis here

// Check if user is already signed in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
    displayUserInfo(user);
  } else {
    // User is signed out
    console.log("User is signed out");
    clearUserInfo();
  }
});

// Sign out
var signOutButton = document.getElementById('signOutButton');
signOutButton.addEventListener('click', function() {
  firebase.auth().signOut()
    .then(function() {
      console.log("User signed out");
      clearUserInfo();
    })
    .catch(function(error) {
      console.log("Sign out error:", error);
    });
});


// const signinbutton = document.getElementById("btnsubmit");
// signinbutton.addEventListener("click",function(){
//   console.log("Jihan er email pai nai")
//     const email = document.getElementById("email");
//     const password = document.getElementById("password")

//     console.log(email.value,password.value)

    
// });
const handleLogin = document.getElementById("handleLogin").addEventListener("click",function(){
  // signInWithEmailPassword();

  console.log("Button is Clicked")
})
function signInWithEmailPassword() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

      console.log(email,password)


  // // [START auth_signin_password]
  // firebase.auth().signInWithEmailAndPassword(email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     var user = userCredential.user;
  //     console.log(user)
  //     // ...
  //   })
  //   .catch((error) => {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     console.log(errorCode,errorMessage)
  //   });
  // // [END auth_signin_password]
}

// Register with email and password
function registerWithEmailPassword() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Registered and signed in
      var user = userCredential.user;
      console.log("User registered and signed in:", user);
      displayUserInfo(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Registration error:", errorCode, errorMessage);
    });
}




// Function to display user information
function displayUserInfo(user) {
  var userNameElement = document.getElementById('userName');
  var userEmailElement = document.getElementById('userEmail');

  userNameElement.textContent = "Name: " + user.displayName;
  userEmailElement.textContent = "Email: " + user.email;

  // Show the user details container
  document.getElementById('userDetails').style.display = 'block';
}

// Function to clear user information
function clearUserInfo() {
  var userNameElement = document.getElementById('userName');
  var userEmailElement = document.getElementById('userEmail');

  userNameElement.textContent = "";
  userEmailElement.textContent = "";

  // Hide the user details container
  document.getElementById('userDetails').style.display = 'none';

}
