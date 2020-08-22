import React from 'react'

import { Card } from '../../components'

import './hand.css'

export function Hand({ player, isDraggable }) {

    const { cards } = player
    
    return (
        <div 
            className="hand-container" 
            style={{ height: 196 }}
        >
            {cards.map(card => <Card info={card} draggable={isDraggable} />)}
        </div>
    )
}
