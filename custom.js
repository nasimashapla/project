// Move the `signInWithEmailPassword` function outside the click event listener
function signInWithEmailPassword() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email,password);
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        console.log(user);
        window.location.replace("dashboard.html");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      });
    // [END auth_signin_password]
  }
  
  // Add the event listener to the login button
  const handleLoginButton = document.getElementById("handleLogin");
  handleLoginButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    signInWithEmailPassword(); // Call the signInWithEmailPassword function
  });

  // Google Sign-In Button
var googleSignInButton = document.getElementById('handleGoogle');

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

const githubSigninButton = document.getElementById('handleGithub');
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
  });

  // Added closing parenthesis here

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




  
