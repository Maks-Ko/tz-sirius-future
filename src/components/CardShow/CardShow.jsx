import React from "react";
import './CardShow.css';

function CardShow(props) {
    return (
        <>
            <img className="card-show" src={props.card.src.medium} alt={props.card.alt} />
        </>

    );
}

export default CardShow;