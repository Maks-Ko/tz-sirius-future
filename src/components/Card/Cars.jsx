import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import favorite from '../../images/favorite-active.svg';
import './Card.css';

function Card(props) {
    let { path } = useRouteMatch();
    let  id  = 1; // времменое решение

    return (
        <li className={`card ${props.imageSize}`}>
            <Link to={`${path}${id}`}>
                {props.isFavorite && <img className="card__favorite" src={favorite} alt="сердце" />}
                <img className={`card__image`} src="https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-44.jpg" alt="Название" />
            </Link>
        </li>
    );
}

export default Card;