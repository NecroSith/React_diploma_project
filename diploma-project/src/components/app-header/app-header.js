import React from 'react';
import './app-header.sass';
import logo from '../../logo/Logo.svg';
import beansLogo from '../../logo/Beans_logo.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {headerChanged} from '../../actions/';


class AppHeader extends React.Component {
    render() {

        const {pageNumber} = this.props;

        const wrapper = pageNumber === 1 ? 'preview' : 'banner';
        const addContent = pageNumber === 1 ?  <div className="container"> 
                                                    <div className="row">
                                                        <div className="col-lg-10 offset-lg-1">
                                                            <h1 className="title-big">Everything You Love About Coffee</h1>
                                                            <img className="beanslogo" src={beansLogo} alt="Beans logo" />>
                                                            <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                                            <div className="preview__subtitle">Want to try our beans?</div>
                                                            <Link to='/coffee-app/our-coffee' onClick={() => this.props.headerChanged(2)} className="preview__btn">More</Link>
                                                        </div>
                                                    </div>
                                                </div> : null;

        let title = null;
        if (pageNumber === 2) {
            title = <h1 className="title-big">Our Coffee</h1>
        }
        else if (pageNumber === 3) {
            title = <h1 className="title-big">Contact Us</h1>
        }
        else if (pageNumber === 0) {
            title = <h1 className="title-big">Not found</h1>
        }

        return (
            <div className={wrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <header>
                                <ul className="header">
                                    <li className="header__item" onClick={() => this.props.headerChanged(1)}>
                                        <Link to='/coffee-app/'>
                                            <img src={logo} alt="logo" />
                                        </Link>
                                    </li>
                                    <li className="header__item" onClick={() => this.props.headerChanged(2)}>
                                        <Link to='/coffee-app/our-coffee'>Our Coffee</Link>
                                    </li>
                                    <li className="header__item" onClick={() => this.props.headerChanged(2)}>
                                        <Link to='/coffee-app/for-your-pleasure'>For your pleasure</Link>
                                    </li>
                                    <li className="header__item" onClick={() => this.props.headerChanged(3)}>
                                        <Link to='/coffee-app/contact-us'>Contact us</Link>
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

const mapStateToProps = (state) => {
    return {
        pageNumber: state.pageNumber
    }
}

const mapDispatchToProps = {
    headerChanged
}


export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);