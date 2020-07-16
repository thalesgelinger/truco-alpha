import React from 'react'
import { useHistory } from "react-router-dom";
import "./home.css"

export function HomeScreen({ match }) {

    const history = useHistory()

    const chossedRoom = "room-1"

    function openGameRoom() {
        history.push(`/game/${chossedRoom}/${match.params.user}`)
    }

    return (
        <div className="home-container">
            <div className="rooms-container">
                <div className="room" onClick={openGameRoom}>
                    <h1>{chossedRoom}</h1>
                </div>
            </div>
            <div className="ranking-container">
                <div className="ranking-user-box">
                    <div className="header-box">
                        <h1>Nome</h1>
                        <h2>Vitórias</h2>
                    </div>
                    <div className="user-box">
                        <h1>{match.params.user}</h1>
                        <h2>6</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
