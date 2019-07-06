import React from 'react';
import './app-header.sass';
import logo from '../../logo/Logo.svg';
import beansLogo from '../../logo/Beans_logo.svg';


class AppHeader extends React.Component {
    render() {

        const {pageNumber = 1} = this.props;

        const wrapper = pageNumber == 1 ? 'preview' : 'banner';
        const addContent = pageNumber == 1 ?  <div className="container"> 
                                                    <div className="row">
                                                        <div className="col-lg-10 offset-lg-1">
                                                            <h1 className="title-big">Everything You Love About Coffee</h1>
                                                            <img className="beanslogo" src={beansLogo} alt="Beans logo" />>
                                                            <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                                            <div className="preview__subtitle">Want to try our beans?</div>
                                                            <a href="#" className="preview__btn">More</a>
                                                        </div>
                                                    </div>
                                                </div> : null;

        const title = pageNumber != 1 ?  <h1 className="title-big">Our Coffee</h1> : null;

        return (
            <div className={wrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <header>
                                <ul className="header">
                                    <li className="header__item">
                                        <a href="#">
                                            <img src={logo} alt="logo" />
                                        </a>
                                    </li>
                                    <li className="header__item">
                                        <a href="#">Our coffee</a>
                                    </li>
                                    <li className="header__item">
                                        <a href="#">For your pleasure</a>
                                    </li>
                                </ul>
                            </header>
                        </div>
                    </div>
                    {title}
                </div>
                {addContent}
            </div>
        )
    }
}

export default AppHeader;