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
                isFavorite={props.isFavorite} />
            <Footer />
        </>
    );
}

export default Main;