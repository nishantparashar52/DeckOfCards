class Card {
    constructor(value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
}

class InitCard{
    constructor() {
        this.cards = [];
        this.counter = 0;
    }
    deckOfCards() {
        this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['Hearts','Diamonds','Spades','Clubs'];
        const drawMoreCards = document.getElementById('drawCards');
        drawMoreCards.addEventListener('click', this.drawRandomCards.bind(this));
        for(let i = 0 ; i < this.suits.length; i++) {
            for(let j = 0; j < this.names.length; j++) {
                this.cards.push(new Card(j + 1, this.names[j], this.suits[i]))
            }
        }
    }

    drawRandomCards() {
        const give5randomcards = [];
        if(this.cards.length > 0) {
            const counterLength = this.cards.length > 5 ? 5 : this.cards.length;
            for(let i =0; i< counterLength ; i++) {
                let drawn = this.calculatedrawn(this.cards.length);
                give5randomcards.push(this.cards[drawn]);
                this.cards.splice(drawn, 1);
            }
            this.counter += 5;
            this.displayCards(give5randomcards);
        }
    }

    calculatedrawn(cardLength) {
        return Math.floor(Math.random() * cardLength);
    }
    
    displayCards(cardList) {
        let cardsDeck = document.getElementById('showCards');
        for(let i=0; i < cardList.length; i++){
            console.log(cardList[i]);
            let ascii_char = '';
            const div = document.createElement('div');
            div.className = 'card';

            if(cardList[i].suit == 'Diamonds'){
                ascii_char = '&diams;';
            } else {
                ascii_char = '&' + cardList[i].suit.toLowerCase() + ';';
            }
            div.innerHTML = '<span class="number">' + cardList[i].name + '</span><span class="suit">' + ascii_char + '</span>';
            cardsDeck.appendChild(div);
	    }
    }
    clearCards() {
        const showcards = document.getElementById('showCards');
        showcards.innerHTML = '';
    }
}
let c = new InitCard();
c.deckOfCards();