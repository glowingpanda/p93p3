//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyBT-04euK8f-3_8gEyl5CsT2H-fJpnd4Eo",
      authDomain: "kpop-70646.firebaseapp.com",
      databaseURL: "https://kpop-70646-default-rtdb.firebaseio.com",
      projectId: "kpop-70646",
      storageBucket: "kpop-70646.appspot.com",
      messagingSenderId: "89621644071",
      appId: "1:89621644071:web:08d09ff295b3fe38d95f02"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}