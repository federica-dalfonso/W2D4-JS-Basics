/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50

  
let utenteCheEffettuaLAcquisto = marco;
let cartPrice = prices[2];

if ((cartPrice < 100) && utenteCheEffettuaLAcquisto.isAmbassador) {
  let saleCart = cartPrice - (cartPrice * 30 /100);
  let finalCart = saleCart + shippingCost;
  console.log (finalCart);
} else if ((cartPrice < 100) && !utenteCheEffettuaLAcquisto.isAmbassador) {
  finalCart = cartPrice + shippingCost;
  console.log (finalCart);
} else if ((cartPrice >= 100) && utenteCheEffettuaLAcquisto.isAmbassador) {
  saleCart = cartPrice - (cartPrice * 30 /100);
  finalCart = saleCart + 0;
  console.log (finalCart); 
} else {
  finalCart = cartPrice + 0;
  console.log (finalCart); 
};


/*Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" 
basandoti sui dati contenuti nell'oggetto. ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"*/ 
let arrayUsers = [ 
  {name: "Marco", lastName: "Rossi", isAmbassador: true}, 
  {name: "Paul", lastName: "Flynn", isAmbassador: false},
  {name: "Amy", lastName: "Reed", isAmbassador: false},
]; 
arrayUsers.push({name: "Gianni", lastName: "Bianchi", isAmbassador: true}, 
                {name: "Rebecca", lastName: "Keller", isAmbassador: false},
                {name: "Luigi", lastName: "Balbo", isAmbassador: false},
                {name: "Sonja", lastName: "Kropp", isAmbassador: false},
                {name: "Jack", lastName: "Marry", isAmbassador: true});
console.log (arrayUsers);

for (let index = 0; index < arrayUsers.length; index++) {
  let singleUser = arrayUsers[index];
  if (singleUser.isAmbassador) { 
    console.log (singleUser.name + " " + singleUser.lastName + " is an Ambassador ");
  } else {console.log (singleUser.name + " " + singleUser.lastName + " isn't an Ambassador ")};
}

// Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador
arrayUsers.splice (1,2);
console.log (arrayUsers);
arrayUsers.splice (2,3);
console.log (arrayUsers);
