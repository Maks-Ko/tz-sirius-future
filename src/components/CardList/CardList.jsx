import React from "react";
import Card from "../Card/Card";
import './CardList.css';

function CardList(props) {
    return (
        <main className="main">
            <ul className="card-list">
                {props.cards.map(card => {
                    return (
                        <Card 
                            card={card}
                            key={card.id}
                            onCardShow={props.onCardShow}
                            isFavorite={props.isFavorite}
                            cardsFavorite={props.cardsFavorite} />
                    )
                })}
            </ul>
        </main>
    );
}

export default CardList;