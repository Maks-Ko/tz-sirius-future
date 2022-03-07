import React from 'react';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import Footer from '../Footer/Footer';

function Main(props) {
    return (
        <>
            <Header
                title={props.title} />
            <CardList
                isFavorite={props.isFavorite}
                cards={props.cards}
                onCardShow={props.onCardShow}
                cardsFavorite={props.cardsFavorite} />
            <Footer />
        </>
    );
}

export default Main;