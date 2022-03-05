import React from 'react';
import Header from '../Header/Header';

function Main(props) {
    return (
        <>
            <Header
                title={props.title} />
            <main className='main' >

            </main>
        </>
    );
}

export default Main;