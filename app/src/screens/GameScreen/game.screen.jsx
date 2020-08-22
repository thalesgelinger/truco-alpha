import React, { useState, useEffect } from 'react'

import { Hand, Card } from "../../components"

import './game.css'
import { useDrop } from 'react-dnd'

export function GameScreen() {

    const [player, setPlayer] = useState({
        username: "Thales",
        cards: [
            {
                name: "notFoundCard"
            },
            {
                name: "notFoundCard"
            },
            {
                name: "notFoundCard"
            }
        ]
    })

    const oponent = {
        username: "User Name 2",
        cards: [
            {
                name: "notFoundCard"
            },
            {
                name: "notFoundCard"
            },
            {
                name: "notFoundCard"
            }
        ]
    }

    const [cardsOnTable, setCardsOnTable] = useState({})

    useEffect(() => {

        const positionsAvaiable = ['a', 'b', 'c']

        let cards = [
            {
                name: "trucoBasto1"
            },
            {
                name: "trucoBasto2"
            },
            {
                name: "trucoBasto3"
            }
        ]
        
        cards = cards.map(({ name }, index) => ({
                    name, 
                    position: positionsAvaiable[index]
                }))

        setPlayer({
            username: player.username,
            cards
        })
        
    }, [])

    const [, dropRef] = useDrop({
        accept: "CARD",
        drop({ cardInfo }) {
          dropCard(cardInfo)
        },
    });

    function dropCard(droppedCard) {
        const { username, cards } = player

        droppedCard.position = "player-card"

        setCardsOnTable({
            [`${username}`]: droppedCard
        })
        
        setPlayer({
            username, 
            cards: cards.filter(card => card.name !== droppedCard.name)
        }) 
    }

    return (
        <div className="game-container">
            <Hand player={oponent}/>
            <div className="table-container" ref={dropRef}>
                { cardsOnTable[oponent.username] && <Card info={cardsOnTable[oponent.username]}/> }
                

                { cardsOnTable[player.username] && <Card info={cardsOnTable[player.username]}/> }

            </div>
            <Hand player={player} isDraggable/>
        </div>
    )
}
