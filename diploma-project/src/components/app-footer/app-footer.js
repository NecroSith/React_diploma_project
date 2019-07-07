import React from 'react';
import './app-footer.sass';
import logoBlack from '../../logo/Logo_black.svg';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {headerChanged} from '../../actions/';

class AppFooter extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-3">
                            <ul className="footer">
                                <li className="footer__item" onClick={() => this.props.headerChanged(1)}>
                                    <Link className="link" to='/'>
                                        <img src={logoBlack} alt="logo" />
                                    </Link>
                                </li>
                                <li className="footer__item" onClick={() => this.props.headerChanged(2)}>
                                    <Link className="link" to='/our-coffee'>Our Coffee</Link>
                                </li>
                                <li className="footer__item" onClick={() => this.props.headerChanged(2)}>
                                    <Link className="link" to='/for-your-pleasure'>For your pleasure</Link>
                                </li>
                                <li className="footer__item" onClick={() => this.props.headerChanged(3)}>
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

const mapStateToProps = (state) => {
    return {
        pageNumber: state.pageNumber
    }
}

const mapDispatchToProps = {
    headerChanged
}


export default connect(mapStateToProps, mapDispatchToProps)(AppFooter);