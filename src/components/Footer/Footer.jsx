import React from "react";
import gallery from '../../images/home.svg';
import star from '../../images/star.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__conatiner">
                <img className="footer__image" src={gallery} alt="галерея" />
                <p className="footer__text">Галерея</p>
            </div>
            <div className="footer__conatiner">
                <img className="footer__image" src={star} alt="избранное" />
                <p className="footer__text">Избранное</p>
            </div>
        </footer>
    );
}

export default Footer;