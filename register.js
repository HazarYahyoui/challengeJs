var validation = document.getElementById('boutton_envoi')
var Nom = document.getElementById('Nom');
var Prénom = document.getElementById('prénom');
var Email = document.getElementById('email');
var mailM = document.getElementById('mailm');
var mailV =/^[@]/
var MotdePasse = document.getElementById('passe');
var Confirmation = document.getElementById('confirmation');
var v = true ;
// validation.addEventListener('click',valider());
function valider (event){
   event.preventDefault()
    if (Nom.value=='') {
        Nom.classList.add("is-invalid");
        Nom.classList.remove("is-valid");
        v=false;
    } else {
        Nom.classList.add("is-valid") ;
        Nom.classList.remove("is-invalid");
    }
    if (Prénom.value=='') {
        Prénom.classList.add("is-invalid");
        Prénom.classList.remove("is-valid");
        v=false;
    } else {
        Prénom.classList.add("is-valid") ;
        Prénom.classList.remove("is-invalid");
    }
    if (Email.value=='') {
        Email.classList.add("is-invalid");
        Email.classList.remove("is-valid");
        v=false;
    } else {
        Email.classList.add("is-valid") ;
        Email.classList.remove("is-invalid");
    }
    if (MotdePasse.value=='') {
        MotdePasse.classList.add("is-invalid");
        MotdePasse.classList.remove("is-valid");
        v=false;
    } else {
        MotdePasse.classList.add("is-valid") ;
        MotdePasse.classList.remove("is-invalid");
    }
    if (Confirmation.value=='') {
        Confirmation.classList.add("is-invalid");
        Confirmation.classList.remove("is-valid");
        v=false;
    } else {
        Confirmation.classList.add("is-valid") ;
        Confirmation.classList.remove("is-invalid");
    }

if( v==true){
var users = JSON.parse(localStorage.getItem('users')) || [];
var user ={
    nom: Nom.value ,
    prénom : Prénom.value,
    mail : Email.value ,
    motdePasse : MotdePasse.value ,
    confirmation : Confirmation.value
}
users.push(user);
 localStorage.setItem('users',JSON.stringify(users));
 document.location.href='login.html'
}
}