export enum Suit {
    Hearts = 'Hearts',
    Clubs = 'Clubs',
    Spades = 'Spades',
    Diamonds = 'Diamonds',
}
export interface Card {
    suit: Suit,
    color?: string,
    value: number
}
function parseSuit(suitString: string): {suit: Suit, color: string} {
    var suit = Suit.Hearts;
    var color = 'red';
    if (suitString === 'D') {
        suit = Suit.Diamonds;
    } else if (suitString === 'S') {
        suit = Suit.Spades;
        color = 'black';
    } else if (suitString === 'C') {
        suit = Suit.Clubs;
        color = 'black';
    }
    return {suit, color};
}

function parseValue(valueString: string): number {
    var cardValue = parseInt(valueString);

    if (valueString === "A") {
        cardValue = 14
    } else if (valueString === "K") {
        cardValue = 13
    } else if (valueString === "Q") {
        cardValue = 12
    } else if (valueString === "J") {
        cardValue = 11
    } else if (valueString === "T") {
        cardValue = 10
    }
    return cardValue;
}

export function parseCard(s: string): Card {
    var {suit, color} = parseSuit(s[1]);
    var cardValue = parseValue(s[0]);
    return { suit: suit, color, value: cardValue };
}

export function parseHand(handString: string): Card[] {
    let cards = handString.split(" ");
    let hand = cards.map(card => parseCard(card));
    return hand;
}

export function splitHands(hands: string): string[] {
    return hands.split("  ").map(x => x.slice(7));
}
