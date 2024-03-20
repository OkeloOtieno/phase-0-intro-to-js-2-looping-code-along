
function writeCards(names, eventss) {
    
    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        const names = ["Guadalupe", "Ollie", "Aki"];
        const eventss = "surprise"
        const name = names[i];
        const message = `Thank you, ${name}, for the wonderful ${eventss} gift!`;
        thankYouCards.push(message);
    }
    return thankYouCards;
  }
writeCards(names, eventss)


function countDown() {
    let count = 10;
    while(count >= 0){ 
        console.log(count);
        count--; 
    }
}

countDown(); 
