
//Connexion socketIo
const socket = io();

// Logique création et stockage messages
const form = document.getElementById("form");
const formSubmit = document.getElementById('formSubmit');
const prenom = document.getElementById('prenom');
const message = document.getElementById('message');
const messageDiv = document.getElementById('app');
const lmessageArray = localStorage.getItem("lmessageArray") ? JSON.parse(localStorage.getItem("lmessageArray")) : [];


lmessageArray.forEach(message => {
  const messageDisplay = document.createElement('div');
  const user = document.createElement('h2');
  const messageText = document.createElement('p');
  const line = document.createElement('div');
  line.classList.add("line");
  user.textContent = message.prenom;
  messageText.textContent = message.message;
  messageDisplay.appendChild(user);
  messageDisplay.appendChild(messageText);
  messageDisplay.appendChild(line);
  messageDiv.appendChild(messageDisplay);
})


function nouveauMessage(lprenom, lmessage) {
  lmessageArray.push({
    prenom: lprenom,
    message: lmessage
  });
  localStorage.setItem(
    'lmessageArray', JSON.stringify(lmessageArray)
  );
  messageDiv.innerHTML = "";
  lmessageArray.forEach(message => {
    const messageDisplay = document.createElement('div');
    const user = document.createElement('h2');
    const messageText = document.createElement('p');
    const line = document.createElement('div');
    line.classList.add("line");
    user.textContent = message.prenom;
    messageText.textContent = message.message;
    messageDisplay.appendChild(user);
    messageDisplay.appendChild(messageText);
    messageDisplay.appendChild(line);
    messageDiv.appendChild(messageDisplay);
  })
}

socket.on("nouveauMessage", (lprenom, lmessage) => {
  nouveauMessage(lprenom, lmessage);
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const lprenom = prenom.value;
  const lmessage = message.value;
  socket.emit("nouveauMessage", lprenom, lmessage);
  message.value = ""
})

// En cas de non connexion à internet

if (!navigator.onLine) {
  const warning = document.createElement('p');
  warning.textContent = "Vous n'êtes actuellement pas connecté à internet"
  warning.classList.add('red');
  const container = document.getElementById('chat');
  container.insertBefore(warning, messageDiv);
}