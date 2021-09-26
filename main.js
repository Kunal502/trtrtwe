
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDrZOm1OOlLdb_jzGGnznRNwO2_7KxsRpI",
    authDomain: "pratice-6b86f.firebaseapp.com",
    databaseURL: "https://pratice-6b86f-default-rtdb.firebaseio.com",
    projectId: "pratice-6b86f",
    storageBucket: "pratice-6b86f.appspot.com",
    messagingSenderId: "501843594267",
    appId: "1:501843594267:web:eaf2e2773cef1bde62bcbe",
    measurementId: "G-YY0FSY3T4T"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //code

  function adduser(){
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }