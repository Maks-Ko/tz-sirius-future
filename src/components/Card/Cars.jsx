import React from "react";
import './Card.css';

function Card() {
    return(
        <li className="card">
            <img className="card__image" src="https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-44.jpg" alt="Название" />
        </li>
    );
}

export default Card;