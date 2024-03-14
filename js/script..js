// alert('funziona?');

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userWord = prompt('Inserisci una parola');
console.log(userWord);

const parolaInversa = invertiParola(userWord);

if(userWord === parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(str){
  const strInversa = str.toLowerCase().split('').reverse().join('');  
  return strInversa;
}


/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userChoice = prompt('Scegli pari o dispari');
console.log(userChoise);

let userChoiceN = (parseInt(prompt('Scegli un numero da 1 a 5')));
console.log(userChoiceN);

