// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "chat_room.html";
  }



