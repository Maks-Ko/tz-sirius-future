import React from "react";
import favorite from '../../images/favorite-active.svg';
import './Card.css';

function Card(props) {
    return(
        <li className="card">
            {props.isFavorite && <img className="card__favorite" src={favorite} alt="сердце"/>}
            <img className="card__image" src="https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-44.jpg" alt="Название" />
        </li>
    );
}

export default Card;