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
  const loginMsg = document.getElementById("loginMsg");
  const routeMsg = document.getElementById("routeMsg");

  // login
  login.addEventListener('click', e => {
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => console.log(e.message));
  });

  //signup
  signup.addEventListener('click', e => {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => console.log(e.message));
});

//logout
logout.addEventListener('click', e =>{
    firebase.auth().signOut();
})

//login state
firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log(firebaseUser)
        logout.style.display = 'inline';
        login.style.display = 'none';
        signup.style.display = 'none';
        loginMsg.innerHTML = 'YAY! Authenticated!';
    }
    else {
        console.log("user is not logged in")
        logout.style.display = 'none';
        login.style.display = 'inline';
        signup.style.display = 'inline';
        loginMsg.innerHTML = 'Not Authenticated!';
    }
});

function callOpenRoute() {
    (async () => {
        let response = await fetch('/open');
        let text = await response.text();
        console.log('response.tet:', response)
        routeMsg.innerHTML = text;
    })();
}

function callAuthRoute() {
    firebase.auth().currentUser.getIdToken()
    .then(idToken => {
        console.log('idToken:',idToken);

        (async () => {
            let response = await fetch('/auth', {
                method: 'GET',
                headers: {
                    'Authorization': idToken
                }
            });
            let text = await response.text();
            console.log('response: ', text);
            routeMsg.innerHTML = text;
        })();
    }).catch( e => console.log('error:',e));
}