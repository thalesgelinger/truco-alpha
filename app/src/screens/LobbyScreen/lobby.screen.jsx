import React, { useState } from 'react'
import { icons } from '../../assets'

import './lobby.css'
import { GameRequestModal, Spinner } from '../../components'

export function LobbyScreen() {
    
    const [makePlayRequest, setMakePlayRequest] = useState(false)

    const [waitingPlayRequest, setWaitingPlayRequest] = useState(false)

    const onlineUsers = [
        {
            "name": "User 1",
            "status": "avaiable"
        },
        {
            "name": "User 2",
            "status": "avaiable"
        },
        {
            "name": "User 3",
            "status": "playing"
        },
    ]
    
    return (
        <div className="lobby-container">
            <div className="search-box">
                <input type="text" placeholder="Search user"/>
                <img src={icons.search} alt=""/>
            </div>
            {onlineUsers.map( ({ name, status}) => 
                <div key={name} className="user-card">
                    <h1>{name}</h1>
                    <div className={`status ${status}`}></div>
                </div>
            )}
            {makePlayRequest && <GameRequestModal>
                <h2>User 1 quer jogar, aceita?</h2>
                <div className="options-box">
                    <button className="cancel">
                        <img src={icons.cancel} alt=""/>
                    </button>
                    <button className="accept">
                        <img src={icons.check} alt=""/>
                    </button>
                </div> 
            </GameRequestModal>}

            {waitingPlayRequest && <GameRequestModal height="300px">
                <h2>Aguardando User 2...</h2>
                <Spinner />
                <button className="cancel">
                    <img src={icons.cancel} alt=""/>
                </button>
            </GameRequestModal>}

        </div>
    )
}
