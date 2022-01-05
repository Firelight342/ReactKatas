import React from 'react';
import { InputAndLabel } from '../InputAndLabel';
import { detectHand, RankedHand } from './PokerKata';
import { parseHand, Card } from './PokerParser';

export interface LotrWikiState {
    HandField: string,
    Cards: Card[],
    HandRank?: RankedHand
}


export class PokerComponent extends React.Component<any, LotrWikiState>{
    constructor(props: any) {
        super(props);
        this.state = {
            HandField: '2H 3D 5S 9C KD',
            Cards: []
        }
    }

    render() {
        let icons = {
            Hearts: '♥',
            Clubs: '♣',
            Spades: '♠',
            Diamonds: '♦'
        };

        console.log(this.state);
        return (
            <>
                <InputAndLabel
                    id="HandField"
                    labelText="Hand"
                    value={this.state.HandField}
                    onChange={(text) => this.setState({ HandField: text })} />
                <button onClick={() => {
                    let cards = parseHand(this.state.HandField);
                    let handRank = detectHand(cards);
                    this.setState({
                        Cards: cards,
                        HandRank: handRank
                    });
                    console.log(cards, handRank);
                }}>Parse</button>
                <div>
                    {this.state.Cards.map(card => {
                        return (
                            <div style={{ 
                                display: 'inline-block',
                                width: '100px',
                                height: '150px',
                                border: `1px ${card.color} solid`,
                                alignItems: 'center',
                                }}>
                                <span style={{color: card.color}}>{icons[card.suit]}</span>
                                <span> {card.value} </span>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <span> {this.state.HandRank?.handRank} </span>
                    <span> {this.state.HandRank?.tiebreaker.map(s => s + ', ')} </span>
                </div>
            </>
        )
    }
}
