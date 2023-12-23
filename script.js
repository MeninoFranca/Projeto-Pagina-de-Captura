function subscribe() {
    let inputname = document.querySelector("#name");
    let namep = inputname.value;
    let inputemail = document.querySelector("#email");
    let emailp = inputemail.value;
    let inputestado = document.querySelector("#estado");
    let estadop = inputestado.value;
    console.log("Nome: " + namep);
    console.log("Email: " + emailp);
    console.log("Estado: " + estadop);

    const captura = "Captura";
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
    db.collection(captura).add({
        nome: namep,
        email: emailp,
        estado: estadop,
    }).then((doc) => {
        console.log("Documento inserido no banco de dados com sucesso");
    }).catch(err => {
        console.log(err);
    });
}
