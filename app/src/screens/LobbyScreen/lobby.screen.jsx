import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import { GameRequestModal, Spinner } from '../../components'
import { api } from '../../service/api'

import { icons } from '../../assets'
import './lobby.css'

export function LobbyScreen({ history }) {

    const { username } = history.location.state
    
    const [userPlaying, setUserPlaying] = useState(false)

    const [makePlayRequest, setMakePlayRequest] = useState(false)

    const [waitingPlayRequest, setWaitingPlayRequest] = useState(false)

    const [onlineUsers, setOnlineUsers] = useState([
        {
            name: "User 1",
            status: "playing"
        },
        {
            name: "User 2",
            status: "avaiable"
        }
    ])

    useEffect(() => {
                
        const socket =  io('http://localhost:5000', {

        })
        
        socket.on('connect', ({users}) => {
            setOnlineUsers(users)
        })

        socket.on('gameRequest', (user) => {
            setMakePlayRequest({ user })
        })

        socket.on('gameAccepted', () => {
            history.push('/game', {
                player1 : username, 
            })
        })

        socket.on('gameRefused', () => {
            setMakePlayRequest(false)
            setWaitingPlayRequest(false)
        })

    }, [username])
    

    async function handleMakeGameRequest(user) {
        
        if (user.status === 'playing') {
            setUserPlaying(user)
            setTimeout(() => {
                setUserPlaying(false)
            }, 2000)
            return 
        }
        setWaitingPlayRequest({ user })
    }

    async function handleGameAccept() {
        //TODO
    }

    async function handleGameRefuse() {
        setWaitingPlayRequest(false)
    }

    return (
        <div className="lobby-container">
            <div className="search-box">
                <input type="text" placeholder="Search user"/>
                <img src={icons.search} alt=""/>
            </div>
            {onlineUsers.map( ({ name, status }) => 
                <div key={name} className="user-card" onClick={() => handleMakeGameRequest({ name, status })}>
                    <h1>{name}</h1>
                    <div className={`status ${status}`}></div>
                </div>
            )}
            {makePlayRequest && <GameRequestModal>
                <h2>{ makePlayRequest.user.name } quer jogar, aceita?</h2>
                <div className="options-box">
                    <button className="cancel" onClick={handleGameRefuse}>
                        <img src={icons.cancel} alt=""/>
                    </button>
                    <button className="accept" onClick={handleGameAccept}>
                        <img src={icons.check} alt=""/>
                    </button>
                </div> 
            </GameRequestModal>}

            {waitingPlayRequest && <GameRequestModal height="300px">
                <h2>Aguardando {waitingPlayRequest.user.name}...</h2>
                <Spinner />
                <button className="cancel" onClick={handleGameRefuse}>
                    <img src={icons.cancel} alt=""/>
                </button>
            </GameRequestModal>}

            {userPlaying && <GameRequestModal>
               <h1>{userPlaying.name} ja esta jogando!</h1>    
            </GameRequestModal>}

            <h1 className="username">Bem vindo, {username}!</h1>

        </div>
    )
}
