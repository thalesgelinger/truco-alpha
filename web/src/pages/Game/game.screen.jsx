import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import io from "socket.io-client";

import "./game.css";
import { api } from "../../service/api";
import { Card } from "../../components";

const socket = io.connect("http://localhost:5000");

export function GameScreen({ match }) {
  const [isDragging, setIsDragging] = useState(false);

  const [playedCard, setPlayedCard] = useState(null);

  const [oponentPlayedCard, setOponentPlayedCard] = useState(null);

  const [cards, setCards] = useState([
    "notFoundCard",
    "notFoundCard",
    "notFoundCard",
  ]);

  const [cardsOponent, setCardsOponent] = useState([
    "notFoundCard",
    "notFoundCard",
    "notFoundCard",
  ]);

  useEffect(() => {

    if (!playedCard) {
      getCards();
      setSockets()
    }

  }, []);

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop({ path }) {
      moveCard(path);
    },
  });

  async function getCards() {
    const { data } = await api.get("/cards");
    setCards(data);
  }

  function setSockets() {
    socket.on("play", async (data) => {
      const { user, card, hand } = data;
      if (user === match.params.user) {
        setPlayedCard(<Card path={card.name} />);
        setCards(hand);
      } else if (user !== match.params.user) {
        setOponentPlayedCard(<Card path={card.name} />);
        setCardsOponent(cardsOponent.filter((c, index) => index !== card.id));
      }
    });
  }

  function moveCard(cardName) {
    socket.emit("leaveCard", {
      user: match.params.user,
      hand: cards.filter((card) => card !== cardName), 
      card: {
        id: cards.findIndex((card) => cardName === card),
        name: cardName,
      },
    });
  }

  function handleDragging(status) {
    setIsDragging(status);
  }

  return (
    <div className="game-container">
      <div className="card-container player-1">
        {cards.map((card, key) => (
          <Card path={card} key={key} dragging={handleDragging} />
        ))}
      </div>
      <div className={`game-dropzone ${isDragging ? "is-dragging-zone" : ""}`}>
        <div className="dropzone" aria-disabled>
          {oponentPlayedCard}
        </div>
        <h1>Room title</h1>
        <div
          className={`dropzone ${isDragging ? "is-dragging" : ""}`}
          ref={dropRef}
        >
          {playedCard}
        </div>
      </div>
      <div className="card-container player-2">
        {cardsOponent.map((card, key) => (
          <Card path={card} key={key} />
        ))}
      </div>
    </div>
  );
}
