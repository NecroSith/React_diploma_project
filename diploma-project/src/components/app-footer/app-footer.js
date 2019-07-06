import React from 'react';
import './app-footer.sass';
import logoBlack from '../../logo/Logo_black.svg';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';

const AppFooter = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <a href="#">
                                    <img src={logoBlack} alt="logo" />
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#">Our coffee</a>
                            </li>
                            <li className="footer__item">
                                <a href="#">For your pleasure</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="beanslogo" src={beansLogoBlack} alt="Beans logo" />
            </div>
        </footer>
    )
}

export default AppFooter;