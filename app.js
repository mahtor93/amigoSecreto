// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// recibir los strings desde el input #amigo.
// almacenar los strings en un arreglo 
// generar números aleatorios entre 0 y el largo del arreglo.
// presentar el elemento cuyo índice coincide con el número aleatorio.

let arrAmigos = [];
let total;
function showTextInPlace(identifier, text) {
    let output = document.getElementById(identifier);
    output.innerHTML = text;
}


function agregarAmigo() {
    let userInput = document.getElementById('amigo');
    addFriendsToList(userInput.value);
    userInput.value = '';
}

function populateFriendViewList(){
    let showedList = document.getElementById('listaAmigos');
    showedList.innerHTML = '';
    for(let i=0; i<arrAmigos.length;i++){
        showedList.innerHTML += `<li>${arrAmigos[i]}</li>`
    }
}

function addFriendsToList(friend) {
    arrAmigos.push(friend);
    showTextInPlace('resultado','');
    total = arrAmigos.length;
    populateFriendViewList();
}

function generateRandom(endValue) {
    let randomNumber = Math.floor(Math.random() * endValue);
    return randomNumber;
}

function sortearAmigo() {
    if (total > 1) {
        let randomIndex = generateRandom(total);
        let randomFriend = arrAmigos[randomIndex];
        showTextInPlace('resultado',randomFriend);
    }else{
        showTextInPlace('resultado','Debes añadir al menos a dos personas')
    }
}

