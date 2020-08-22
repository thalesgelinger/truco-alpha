import React, { useEffect } from 'react'

import './card.css'

import { deck } from '../../assets'
import { useDrag } from 'react-dnd';

export function Card({ info, draggable }) {

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: "CARD", cardInfo: info },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(), 
        }),
      })

    return (
        <div 
            className="card-box"
            ref={draggable ? dragRef : null}
            style={{ 
                gridArea: info.position
            }}
        >
            <img src={deck[info.name]} alt={info.name}/>
        </div>
    )
}
