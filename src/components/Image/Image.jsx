import React from 'react';
import Header from '../Header/Header';
import CardShow from '../CardShow/CardShow';
import Action from '../Action/Action';
import './Image.css';

function Image(props) {
    return (
        <>
            <Header
                title={props.title}
                navigation={props.navigation} />
            <CardShow
                imageSize={props.imageSize}
                card={props.card} />
            <Action
                isFavoriteButton={props.isFavoriteButton}
                onCardFavorite={props.onCardFavorite}
                card={props.card}
                onCardDelete={props.onCardDelete} />
        </>
    );
}

export default Image;