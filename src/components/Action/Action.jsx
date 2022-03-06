import React from "react";
import './Action.css'
import favorite from '../../images/favorite.svg';
import favoriteActive from '../../images/favorite-active.svg';
import del from '../../images/delete.svg';

function Action(props) {
    return(
        <section className="action">
            <div className="action__comntainer">
                <button className="action__buttons">
                    <img className="action__buttons-img" src={props.isFavoriteButton ? favoriteActive : favorite} alt="сердечко" />
                    <p className="action__buttons-title">{props.isFavoriteButton ? 'Убрать из избранного' : 'Добавить в избранное'}</p>
                </button>
                <button className="action__buttons">
                    <img className="action__buttons-img" src={del} alt="корзина" />
                    <p className="action__buttons-title">Удалить изображение</p>
                </button>
            </div>
        </section>
    );
}

export default Action;