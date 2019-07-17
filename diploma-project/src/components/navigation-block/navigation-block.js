import React from 'react';

const NavigationBlock = () => {
    return (
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
    )
}

export default NavigationBlock;