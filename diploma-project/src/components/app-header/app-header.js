import React from 'react';
import './app-header.sass';
import NavigationBlock from '../navigation-block/navigation-block';
import logo from '../../logo/Logo.svg';

class AppHeader extends React.Component {
    render() {
        return (
            <header>
                <NavigationBlock wrapperClass='header' logo={logo} />
            </header>
        )
    }
}

export default AppHeader;