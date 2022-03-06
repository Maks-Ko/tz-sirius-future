import React from 'react';
import Header from '../Header/Header';
import Card from '../Card/Cars';
import Action from '../Action/Action';
import './Image.css';

function Image(props) {
    return (
        <>
            <Header
                title={props.title}
                navigation={props.navigation} />
            <Card
                imageSize={props.imageSize} />
            <Action
                isFavoriteButton={props.isFavoriteButton} />
        </>
    );
}

export default Image;