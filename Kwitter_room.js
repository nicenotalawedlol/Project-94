
var firebaseConfig = {
      apiKey: "AIzaSyDqskkygKFl_nIVSFUci96VuZciS9__FnI",
      authDomain: "kwitter-f8b5f.firebaseapp.com",
      databaseURL: "https://kwitter-f8b5f-default-rtdb.firebaseio.com",
      projectId: "kwitter-f8b5f",
      storageBucket: "kwitter-f8b5f.appspot.com",
      messagingSenderId: "163291951038",
      appId: "1:163291951038:web:ebf0069b66dedd493313ef"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}