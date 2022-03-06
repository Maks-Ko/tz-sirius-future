import React from "react";
import { NavLink } from "react-router-dom";
import gallery from '../../images/home.svg';
import star from '../../images/star.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <NavLink exact to='/' activeClassName="footer__conatiner_activ" className="footer__conatiner">
                <img className="footer__image" src={gallery} alt="галерея" />
                <p className="footer__text">Галерея</p>
            </NavLink>
            <NavLink to='/favorite' activeClassName="footer__conatiner_activ" className="footer__conatiner">
                <img className="footer__image" src={star} alt="избранное" />
                <p className="footer__text">Избранное</p>
            </NavLink>
        </footer>
    );
}

export default Footer;