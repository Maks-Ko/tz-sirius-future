import React from 'react';
import { useHistory } from 'react-router-dom';
import arrowBack from '../../images/Vector.svg';
import './Header.css';

function Header(props) {
    const history = useHistory();

    return(
        <header className='header'>
            <img className={`header__image ${props.navigation}`} src={arrowBack} alt='стрелка назад' onClick={() => history.goBack()} />
            <h1 className='header__title'>{props.title}</h1>
        </header>
    );
}

export default Header;