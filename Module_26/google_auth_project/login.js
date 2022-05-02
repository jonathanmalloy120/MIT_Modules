(function () {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC2yKBxEre-6TzCFK14hR2poSfukrx46jk",
    authDomain: "firsttest-a8f11.firebaseapp.com",
    projectId: "firsttest-a8f11",
    storageBucket: "firsttest-a8f11.appspot.com",
    messagingSenderId: "603972135963",
    appId: "1:603972135963:web:44efeccf624cf357115cbe"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // get elements
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");
  const logout = document.getElementById("logout");
  const loggedInStatus = document.getElementById("loggedInStatus");
  const googlelogin = document.getElementById("googlelogin");

  //TODO: Add Google Sign in
  googlelogin.addEventListener("click", (e) => {
    console.log("google sign in clicked");

    // TODO: Use firebase.auth.GoogleAuthProvider() to implement Google sign in
    // Hint: the user email address is in the results user object: result.user.email
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      loggedInStatus.innerText = `You are logged in using the following email: ${result.user.email}`;
      email.style.display = 'none'
      password.style.display = 'none'
      login.style.display = 'none'
      signup.style.display = 'none'
      googlelogin.style.display = 'none'
      logout.style.display = 'inline'
    })
    .catch(function (error) {
      console.log(error.code);
      console.log(error.message);
    });
  });

  // login
  login.addEventListener("click", (e) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  // signup
  signup.addEventListener("click", (e) => {
    // TODO: check for real email
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  // logout
  logout.addEventListener("click", (e) => {
    firebase.auth().signOut();
  });

  // login state
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      loggedInStatus.innerText = `You are logged in using the following email: ${result.user.email}`;
      logout.style.display = "inline";
      login.style.display = "none";
      signup.style.display = "none";
      email.style.display = "none";
      password.style.display = "none";
      googlelogin.style.display = "none";
    } else {
      console.log("User is not logged in");
      loggedInStatus.innerText = "You are not yet logged in";
      login.style.display = "inline";
      signup.style.display = "inline";
      email.style.display = "inline";
      googlelogin.style.display = "inline";
      password.style.display = "inline";
      logout.style.display = "none";
    }
  });
})();
