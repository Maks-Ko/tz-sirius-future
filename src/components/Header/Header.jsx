import React from 'react';
// simport { NavLink } from 'react-router-dom';
import arrowBack from '../../images/Vector.svg';
import './Header.css';

function Header(props) {
    return(
        <header className='header'>
            <img className={`header__image ${props.navigation}`} src={arrowBack} alt='стрелка назад' />
            <h1 className='header__title'>{props.title}</h1>
        </header>
    );
}

export default Header;