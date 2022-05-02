(function() {
    // Your web app's Firebase configuration
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

   //get UI elements
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const login = document.getElementById('login');
   const signup = document.getElementById('signup');
   const logout = document.getElementById('logout');

   //login
   login.addEventListener('click', e=>{
       const auth = firebase.auth();
       const promise = auth.signInWithEmailAndPassword(email.value, password.value);
       promise.catch(e=>console.log(e.message));
   });

   //signup
   signup.addEventListener('click', e => {
       const auth = firebase.auth();
       const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
       promise.catch(e=>console.log(e.message));
   })

   //logout
   logout.addEventListener('click',e=>{
       firebase.auth().signOut();
   });

   //login state
   firebase.auth().onAuthStateChanged(firebaseUser=>{
    if(firebaseUser){
        console.log(firebaseUser);
        logout.style.display = 'inline';
        login.style.display = 'none';
        signup.style.display = 'none';
    } 
    else{
        console.log('User is not logged in');
        logout.style.display = 'none';
        login.style.display = 'inline';
        signup.style.display = 'inline';
       }
   })
}());
