import React from 'react'
import { deck } from "../../assets"
import "./game.css"

export function GameScreen() {

    const cards = [
        "trucoBasto1",
        "trucoBasto2",
        "trucoBasto3"
    ]

    const cardsOponent = [
        "notFoundCard",
        "notFoundCard",
        "notFoundCard"
    ]

    return (
        <div className="game-container">
            <div className="card-container player-1">
                {cards.map( (card, key) => (
                    <div className="card-box">
                        <div className="card">
                            <img src={deck[card]} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="game-dropzone">
                <div className="dropzone" aria-disabled>
                </div>
                <h1>Room title</h1>
                <div className="dropzone">
                </div>
            </div>
            <div className="card-container player-2">
            {cardsOponent.map( (card, key) => (
                    <div className="card-box">
                        <div className="card">
                            <img src={deck[card]} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
