// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// recibir los strings desde el input #amigo.
// almacenar los strings en un arreglo 
// generar números aleatorios entre 0 y el largo del arreglo.
// presentar el elemento cuyo índice coincide con el número aleatorio.

let arrAmigos = [];

function showTextInPlace(identifier, text) {
    console.log(`Poniendo ${text} en la etiqueta ${identifier}`)
    let output = document.getElementById(identifier);
    output.innerHTML = text;
}

function agregarAmigo() {
    let userInput = document.getElementById('amigo');
    addFriendsToList(userInput.value);
    userInput.value = '';
}

function addFriendsToList(friend) {
    arrAmigos.push(friend);
}

function generateRandom(endValue) {
    let randomNumber = Math.floor(Math.random() * endValue);
    return randomNumber;
}

function sortearAmigo() {
    let total = arrAmigos.length;
    if (arrAmigos != 0) {
        let randomIndex = generateRandom(total);
        let randomFriend = arrAmigos[randomIndex];
        console.log(randomFriend)
        showTextInPlace('resultado',randomFriend);
    }
}

