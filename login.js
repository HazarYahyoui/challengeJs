var login= document.getElementById('connexion');
var Email = document.getElementById('email');
var MotdePasse = document.getElementById('passe');
login.addEventListener('click', LOGIN);
var v=true
function LOGIN(event){
    event.preventDefault();
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
if (v==true) {
// var Conect = JSON.parse(localStorage.getItem('Conect')) || [] ;
var users = JSON.parse(localStorage.getItem('users')) || [];
var information = users.find(elements =>(elements.mail === Email.value) && (elements.motdePasse === MotdePasse.value))
console.log(information);
if(information!=undefined){
localStorage.setItem('Conect',JSON.stringify(information));
document.location.href='dashboard.html';
}
}
}