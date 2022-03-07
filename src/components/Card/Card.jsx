import React from "react";
import { useRouteMatch, Link, useLocation } from "react-router-dom";
import favorite from '../../images/favorite-active.svg';
import './Card.css';

function Card({ card, ...props }) {
    let { path } = useRouteMatch();
    const location = useLocation();

    function favoriteCard() {
        if (location.pathname === '/image') {
            return props.cardsFavorite.some((c) => c.id === card.id);
        }
    }

    const isFavoriteCard = favoriteCard();

    function handleCardShow() {
        props.onCardShow({ card });
        console.log(`${path}/${card.id}`);
    }

    return (
        <li className={`card ${props.imageSize}`}>
            <Link to={`${path}/${card.id}`} onClick={handleCardShow}>
                {(props.isFavorite || isFavoriteCard) && <img className="card__favorite" src={favorite} alt="сердце" />}
                <img className={`card__image`} src={card.src.medium} alt={card.alt} />
            </Link>
        </li>
    );
}

export default Card;