// Informações do RealTime Database do Firebase abaixo:
const firebaseConfig = {
    apiKey: "AIzaSyBZ3Evg5SRCXri-8qX-_F4zL027VFG7cfE",
    authDomain: "rafael-costa-e5625.firebaseapp.com",
    projectId: "rafael-costa-e5625",
    storageBucket: "rafael-costa-e5625.appspot.com",
    messagingSenderId: "482664129233",
    appId: "1:482664129233:web:fddddbbd76f4bb301b5bf0",
    measurementId: "G-GTNJMXL2BY"
  };
  /*
  * Nas regras do Realtime Database, informe:
  * {
    "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
  */
  
  // Inicializando o Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();