import React from 'react';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';

function Main(props) {
    return (
        <>
            <Header
                title={props.title} />
            <CardList />
        </>
    );
}

export default Main;