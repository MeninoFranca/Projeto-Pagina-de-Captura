
function subscribe() {
    let inputname = document.querySelector("#name");
    let name = inputname.value;
    let inputemail = document.querySelector("#email");
    let email = inputemail.value;
    let inputestado = document.querySelector("#estado");
    let estado = inputestado.value;
    console.log("Nome: "+name);
    console.log("Email: "+email);
    console.log("Estado: "+estado);

const Config = {
    apiKey: "AIzaSyD14v4w5V9Sq2Q6JzptqM8oZq8ToaHwH_A",
    authDomain: "pagina-de-captura-c23c0.firebaseapp.com",
    projectId: "pagina-de-captura-c23c0",
    storageBucket: "pagina-de-captura-c23c0.appspot.com",
    messagingSenderId: "479616534005",
    appId: "1:479616534005:web:b7065f2f63758c0e254cbc",
    measurementId: "G-MEGJ28X7MB"
};
firebase.initializeApp(Config);
var db = firebase.firestore();

}

