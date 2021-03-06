import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBlock = ({wrapperClass, logo}) => {
    return (
        <ul className={wrapperClass}>
            <li className={`${wrapperClass}__item`}>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </li>
            <li className={`${wrapperClass}__item`}>
                <Link to='/our-coffee'>Our Coffee</Link>
            </li>
            <li className={`${wrapperClass}__item`}>
                <Link to='/for-your-pleasure'>For your pleasure</Link>
            </li>
            <li className={`${wrapperClass}__item`}>
                <Link to='/contact-us'>Contact us</Link>
            </li>
        </ul>
    )
}

export default NavigationBlock;