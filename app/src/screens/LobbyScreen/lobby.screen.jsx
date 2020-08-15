import React from 'react'
import { icons } from '../../assets'

import './lobby.css'

export function LobbyScreen() {
    
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
        </div>
    )
}
