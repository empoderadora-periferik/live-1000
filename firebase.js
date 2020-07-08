const form = document.querySelector('.registrationForm');
const inputEmail = form.querySelector('#email');
const inputName = form.querySelector('#nome');

const formPopup = document.querySelector('.registrationFormPopup');
const inputEmailPopup = formPopup.querySelector('#emailPopup');
const inputNamePopup = formPopup.querySelector('#nomePopup');

const firebaseConfig = {
    apiKey: "AIzaSyCm2O2pHdODZfJqxLmX7eldxz7dd1DEBls",
    authDomain: "gamaexperiencelive.firebaseapp.com",
    databaseURL: "https://gamaexperiencelive.firebaseio.com",
    projectId: "gamaexperiencelive",
    storageBucket: "gamaexperiencelive.appspot.com",
    messagingSenderId: "326098816769",
    appId: "1:326098816769:web:8877e6397b9e5472e59500"
  };


//push function
function firebasePush(input) {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    var mailsRef = firebase.database().ref('emails').push().set(
        {
        mail: input.value
        }
    );

}

//push on form submit 
if (form) {
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        firebasePush(inputEmail);

        return alert('Cadastro realizado com sucesso!');
    })
}

//trigger if using popup form
if (formPopup) {
    formPopup.addEventListener('submit', function(evt) {
        evt.preventDefault();
        firebasePush(inputEmailPopup);

        return alert('Cadastro realizado com sucesso!');
    })
}