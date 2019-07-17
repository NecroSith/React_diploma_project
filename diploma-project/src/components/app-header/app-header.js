import React from 'react';
import './app-header.sass';
import logo from '../../logo/Logo.svg';
import {Link} from 'react-router-dom';

class AppHeader extends React.Component {
    render() {
        return (
            <header>
                <ul className="header">
                    <li className="header__item">
                        <Link to='/coffee-app/'>
                            <img src={logo} alt="logo" />
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link to='/coffee-app/our-coffee'>Our Coffee</Link>
                    </li>
                    <li className="header__item">
                        <Link to='/coffee-app/for-your-pleasure'>For your pleasure</Link>
                    </li>
                    <li className="header__item">
                        <Link to='/coffee-app/contact-us'>Contact us</Link>
                    </li>
                </ul>
            </header>
        )
    }
}

export default AppHeader;