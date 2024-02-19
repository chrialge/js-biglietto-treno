// console.log('ciao');

/*
    - step 1: chieder quanti kilometri deve percorrere e raccoglierla in una variabile
        - step 1b: calcolare il prezzo in base al kilometraggio ed esso racchiuderla in una variabile 
*/

const userKilometre = Number(prompt('Quanti kilometri devi percorrere?'));
//rule of debug
// console.log(typeof userKilometre);
// console.log(userKilometre);

let priceForKilometre = (userKilometre * 0.21);
//rule of debug
// console.log(typeof priceForKilometre);
// console.log(priceForKilometre.toFixed(2));

/*
    - step 2: chidere l'eta e raccoglierla in una variabile
*/

const userAge = Number(prompt('Quanti hanni hai?'));
//rule of debug
// console.log(typeof userAge);
// console.log(userAge);

/*
    - step 3: creare una codizione per applicare lo sconto sul prezzo tariffario:
        + SE e minorenne applica il 20%
        + ALTRIMENTI SE e over 65 applica sconto del 40%
        + ALTRIMENTI NIENTE
*/
let priceFinal
if (userAge < 18) {
    let priceFinal = (priceForKilometre / 5) * 4; 
    priceFinal = priceFinal.toFixed(2);
    alert(`Il costo del suo biglietto e di ${priceFinal} \u20AC`)
    //rule of debug
    // console.log(typeof priceFinal);
    // console.log(priceFinal.toFixed(2));
} else if(userAge > 65){
    let priceFinal = (priceForKilometre /5) *3;
    priceFinal = priceFinal.toFixed(2);
    alert(`Il costo del suo biglietto e di ${priceFinal} \u20AC`)
    //rule of debug
    // console.log(typeof priceFinal);
    // console.log(priceFinal.toFixed(2));
} else{
    let priceFinal = priceForKilometre;
    priceFinal = priceFinal.toFixed(2);
    alert(`Il costo del suo biglietto e di ${priceFinal} \u20AC`)
}