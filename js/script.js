/*Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)
*/

//TODO 1. Creo funzione per randomizzare i numeri
//TODO 2. Creo un array vuoto in cui inserire i numeri generati casualmente e pongo la condizione di inserire solo numeri diversi tra loro
//TODO 3. Stampo l'array di numeri casuali nell'alert
//TODO 4. Imposto setTimeout affinché la funzione chieda i numeri all'utente dopo 30 secondi da quando l'utente clicca l'ok dell'alert
//TODO 5. Creo variabile per chiedere all'utente di inserire i 5 numeri visualizzati
//TODO 6. Creo array vuoto per memorizzare i numeri inseriti dall'utente e pongo la condizione che venga riempito fino ad un massimo di 5 elementi
//TODO 7. Controllo se gli elementi dell'array utente sono presenti nell'array dei numeri casuali


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


//! 4. + 5. + 6.
var userList = [];

setTimeout(function() {
  
    var userArray = [];

    do {
        var user = parseInt(prompt('Inserisci i 5 numeri memorizzati'));
        userArray.push(user);
    } while (userArray.length < 5) 

    console.log(userArray);

}, 30000);




/*
var rememberedNumbers = [];

if (userList.includes(randomNumbers)){
    rememberedNumbers.push(randomNumbers);
}

console.log('L\'utente è riuscito a ricordare i seguenti numeri: ' + rememberedNumbers);
*/




