let form = document.getElementById("form");
let formSubmit = document.getElementById('formSubmit');
let prenom = document.getElementById('prenom');
let message = document.getElementById('message');
let messageArray = [];

//Variables Stockage local 
let lprenom = localStorage.getItem('prenom');
let lmessageArray = localStorage.getItem('messageArray');

if(lprenom){
    prenom.value = lprenom;
}
//Affichage des éléments du tableau
lmessageArray = JSON.parse(localStorage.getItem('messageArray'));
console.log(lmessageArray);
lmessageArray.forEach(message => {
    console.log(message);
})

//Au click du bouton submit
form.addEventListener('submit', (e)=>{
e.preventDefault();


//Stockage des éléments dans un tableau
localStorage.setItem('prenom', prenom.value);

if (lmessageArray){
    messageArray = JSON.parse(lmessageArray);
}

let item = {
    firstname: prenom.value,
    message: message.value
}
messageArray.push(item);
localStorage.setItem('messageArray', JSON.stringify(messageArray));
})