import React from "react";
import Card from "../Card/Cars";
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
                            onCardShow={props.onCardShow} />
                    )
                })}
            </ul>
        </main>
    );
}

export default CardList;