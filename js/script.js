/*Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)
*/

//TODO 1. Creo funzione per randomizzare i numeri
//TODO 2. Creo un array vuoto in cui inserire i numeri generati casualmente e pongo la condizione di inserire solo numeri diversi tra loro
//TODO 3. Stampo l'array di numeri casuali nell'alert
//TODO 4. Creo funzione per chiedere all'utente di inserire i 5 numeri visualizzati
//TODO 5. Creo array vuoto per memorizzare i numeri inseriti dall'utente e pongo la condizione che venga riempito fino ad un massimo di 5 elementi
//TODO 6. Pongo i termini affinché la funzione che chiede i numeri all'utente sia avviata dopo 30 secondi da quando l'utente clicca l'ok dell'alert

//! 1. 
function cpuRandom(){
    var random = Math.floor(Math.random() * 100) + 1;

    return random;
}


//! 2. 
var numberList = []; 
var randomNumbers = cpuRandom();


while (numberList.length < 5) {

    randomNumbers = cpuRandom();

    if (!numberList.includes(randomNumbers)){

        numberList.push(randomNumbers);
    } 
}

console.log(numberList);


//! 3.
alert('Memorizza i seguenti numeri: ' + numberList);


//! 6. 
setTimeout(writeNumbers, 30000) 


//! 4. 
function writeNumbers() {
    var user = parseInt(prompt('Inserisci i 5 numeri memorizzati'));

    return user;
}


//! 5. 
var userList = []; 
var userNumbers = writeNumbers();


do {
    userNumbers = writeNumbers();
    userList.push(userNumbers);
} while (userList.length < 5) 

console.log(userList);


