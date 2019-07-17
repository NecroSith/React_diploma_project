import React from 'react';
import './app-footer.sass';
import logoBlack from '../../logo/Logo_black.svg';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';
import {Link} from 'react-router-dom';

class AppFooter extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-3">
                            <ul className="footer">
                                <li className="footer__item">
                                    <Link className="link" to='/'>
                                        <img src={logoBlack} alt="logo" />
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="link" to='/our-coffee'>Our Coffee</Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="link" to='/for-your-pleasure'>For your pleasure</Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="link" to='/contact-us'>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img className="beanslogo" src={beansLogoBlack} alt="Beans logo" />
                </div>
            </footer>
        )
    }
}

export default AppFooter;