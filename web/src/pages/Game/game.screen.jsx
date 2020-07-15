import React from "react";
import { useDrag, useDrop } from "react-dnd";

import { deck } from "../../assets";
import "./game.css";
import { useState } from "react";

export function GameScreen() {
  const [playedCard, setPlayedCard] = useState(null);

  const [cards, setCards] = useState([
    "trucoBasto1",
    "trucoBasto2",
    "trucoBasto3",
  ]);

  const cardsOponent = ["notFoundCard", "notFoundCard", "notFoundCard"];

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop(item, monitor) {
      console.log(item);
      console.log(monitor);
      moveCard();
    },
  });

  function moveCard() {
    const cardIndex = 2;

    const cardSelected = cards.pop(cardIndex);

    setPlayedCard(
      <div>
        <img src={deck[cardSelected]} alt="" />
      </div>
    );
    setCards(cards);
  }

  return (
    <div className="game-container">
      <div className="card-container player-1">
        {cards.map((card, key) => (
          <div className="card-box" key={key}>
            <div
              className={`card ${isDragging ? "is-dragging-card" : ""}`}
              ref={dragRef}
            >
              <img src={deck[card]} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className={`game-dropzone ${isDragging ? "is-dragging-zone" : ""}`}>
        <div className="dropzone" aria-disabled>
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
          <div className="card-box">
            <div className="card">
              <img src={deck[card]} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
