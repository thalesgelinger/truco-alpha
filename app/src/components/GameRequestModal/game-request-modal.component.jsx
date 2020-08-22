import React from 'react'

import "./game-request-modal.css"

export function GameRequestModal({ children, height }) {
    return (
        <div className="request-container">
            <div className="request-box" style={{height}}>
                {children}
            </div>
        </div>
    )
}
