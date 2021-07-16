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
//TODO 7. Controllo se il numero scritto dall'utente è presente nell'array dei numeri casuali
//TODO 8. Creo un array dove inserire i numeri ricordati e pongo la condizione che vengano registrati una sola volta
//TODO 9. Alert con totale numeri indovinati ed elenco numeri indovinati


//! 1. 
function cpuRandom(){
    var random = Math.floor(Math.random() * 100) + 1;

    return random;
}


//! 2. 
var numberList = [];


while (numberList.length < 5) {

    var randomNumbers = cpuRandom();

    if (!numberList.includes(randomNumbers)){

        numberList.push(randomNumbers);
    } 
}

console.log(numberList);


//! 3.
alert('Memorizza i seguenti numeri: ' + numberList);


//! 4. + 5. + 6. + 7. + 8. + 9.
setTimeout(function() {

    var userList = [];
    var remNumbers = [];

    do {

        var userNumber = parseInt(prompt('Inserisci i 5 numeri memorizzati'));
        userList.push(userNumber);
            
        if (numberList.includes(userNumber) && !remNumbers.includes(userNumber)){
            remNumbers.push(userNumber);
        }

    } while (userList.length < 5) 

    console.log('Numeri scritti dall\'utente: ' + userList);
    console.log('Lista numeri corretti ricordati: ' + remNumbers);

    alert('L\'utente ha ricordato ' + remNumbers.length + ' numeri su 5.' + ' Lista numeri ricordati: ' + remNumbers);

}, 3000);











