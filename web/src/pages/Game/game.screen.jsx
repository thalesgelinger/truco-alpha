import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import socketIOClient from "socket.io-client";

import "./game.css";
import { api } from "../../service/api";
import { Card } from "../../components";

export function GameScreen({ match }) {

  const [isDragging, setIsDragging] = useState(false);

  const [playedCard, setPlayedCard] = useState(null);

  const [cards, setCards] = useState([
    "notFoundCard",
    "notFoundCard",
    "notFoundCard",
  ]);

  const cardsOponent = [
      "notFoundCard", 
      "notFoundCard", 
      "notFoundCard"
    ];

  useEffect(() => {   
    async function getCards() {
        const { data } = await api.get("/cards") 
        setCards(data)
    }

    const socket = socketIOClient("http://127.0.0.1:5000");
    socket.on("connect", (data) => {
        getCards()
        socket.emit('join', match.params.user)
        
        socket.on('play', data => {
            console.log(data)
        })

    });
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop({ path }) {
      moveCard(path);
    },
  });

  function moveCard(path) {
    console.log(path)
    
    const socket = socketIOClient("http://127.0.0.1:5000");

    socket.on('join', () => {
        socket.send(path)
    })

    setPlayedCard(<Card path={path}/>);
    setCards(cards.filter(card => card !== path));
  }

  function handleDragging (status) {
     setIsDragging(status)  
  }

  return (
    <div className="game-container">
      <div className="card-container player-1">
        {cards.map((card, key) => 
            <Card path={card} key={key} dragging={handleDragging}/>)}
      </div>
      <div className={`game-dropzone ${isDragging ? "is-dragging-zone" : ""}`}>
        <div className="dropzone" aria-disabled></div>
        <h1>Room title</h1>
        <div
          className={`dropzone ${isDragging ? "is-dragging" : ""}`}
          ref={dropRef}
        >
          {playedCard}
        </div>
      </div>
      <div className="card-container player-2">
        {cardsOponent.map((card, key) => 
            <Card path={card} key={key}/>)}
      </div>
    </div>
  );
}
