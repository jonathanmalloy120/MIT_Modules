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

    //initialize db
    const db = firebase.database();

    //get elements
    const message = document.getElementById("message");
    const write = document.getElementById("write");
    const read = document.getElementById("read");
    const status = document.getElementById("status");

    //write
    write.addEventListener('click', e =>{
        const messages = db.ref('messages');

        //simple ID for example
        const id = (new Date).getTime();

        //write to db
        messages.child(id).set({'message' : message.value})
        .then(function(){
            status.innerHTML = "Wrote to DB!";
        });
    });

    //read
    read.addEventListener('click', e => {
        status.innerHTML = '';
        const messages = db.ref('messages');
    

        messages.once('value')
        .then(function(dataSnapshot) {
            var data = dataSnapshot.val();
            var keys = Object.keys(data);

            keys.forEach(function(key) {
                console.log(data[key]);
                status.innerHTML += JSON.stringify(data[key]) + '<br>';
            });

        });
    });

}());