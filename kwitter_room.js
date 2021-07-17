
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML=Room_names=childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location= "kwitter_page.html";
      }
     
getData();
