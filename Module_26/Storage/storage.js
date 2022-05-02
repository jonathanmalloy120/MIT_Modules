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

   //create a root reference
   var storage = firebase.storage();
   var storageRef = storage.ref()

   //get UI elements
   const file = document.getElementById('file');
   const upload = document.getElementById('upload');
   const download = document.getElementById('download');
   const status = document.getElementById('status');
   const image = document.getElementById('image');

   //upload file
   upload.addEventListener('click', e =>{
       var ref = storageRef.child('globe');
       let photo = document.getElementById("file").files[0];

       //upload
       ref.put(photo).then(function(snapshot) {
           console.log('uploaded something!');
           status.innerHTML = "uploaded something!"
       });
   });

   //download
   download.addEventListener('click', e=>{
       //file reference
       var ref = storage.ref('globe');

       ref.getDownloadURL()
       .then(function(url){
           image.src = url;
           status.innerHTML = "downloaded something!"

       })
       .catch(function(error){console.log(error)});
   });

}());