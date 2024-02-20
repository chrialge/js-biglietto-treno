// console.log('ciao');

/*
    - step 1: chieder quanti kilometri deve percorrere e raccoglierla in una variabile
        - step 1b: calcolare il prezzo in base al kilometraggio ed esso racchiuderla in una variabile 
*/
const userKilometre = Number(prompt('Quanti kilometri devi percorrere?'));
//rule of debug
// console.log(typeof userKilometre);
// console.log(userKilometre);
const priceTrain = 0.21
let priceForKilometre = (userKilometre * priceTrain);
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

const discountUnderAge = priceForKilometre / 5;
const discountOverAge = (priceForKilometre / 5) * 2;
let discountBanner = "Standar price"
let priceFinal = priceForKilometre;

if (userAge < 18) {
    priceFinal = priceForKilometre - discountUnderAge; 
    discountBanner = "20% off"
    //rule of debug
    // console.log(typeof priceFinal);
    // console.log(priceFinal.toFixed(2));
} else if(userAge > 65){
    priceFinal = priceForKilometre - discountOverAge;
    discountBanner = "40% off"
    //rule of debug
    // console.log(typeof priceFinal);
    // console.log(priceFinal.toFixed(2));
}
/*
    - step 4: output del prezzo tariffario con il possibile sconto
*/

priceFinal = priceFinal.toFixed(2);

if (isNaN(priceFinal)) {
    alert("devi mettere un numero nei kilometri che percorri")
} else {
    document.writeln(`Il costo del suo biglietto e di ${priceFinal} \u20AC | ${discountBanner} `);
}
