import React from 'react'
import { icons } from '../../assets'

import "./gamerequest.css"

export function GameRequest() {
    return (
        <div className="request-container">
            <div className="request-box">
                <h2>User 1 quer jogar, aceita?</h2>
                <div className="options-box">
                    <button className="cancel">
                        <img src={icons.cancel} alt=""/>
                    </button>
                    <button className="accept">
                        <img src={icons.check} alt=""/>
                    </button>
                </div> 
            </div>
        </div>
    )
}
