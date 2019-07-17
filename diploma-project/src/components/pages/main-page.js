import React from 'react';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';
import BestGoods from '../best-goods/best-goods';
import {Container, Row, Col} from 'reactstrap';
import AppHeader from '../app-header';
import beansLogo from '../../logo/Beans_logo.svg';
import {Link} from 'react-router-dom';

const MainPage = () => {
    return (
        <>
        <div className="preview">
            <Container>
                <Row>
                    <Col lg={6}>
                        <AppHeader />
                    </Col>
                </Row>
                <div className="container"> 
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h1 className="title-big">Everything You Love About Coffee</h1>
                            <img className="beanslogo" src={beansLogo} alt="Beans logo" />>
                            <div className="preview__subtitle">We makes every day full of energy and taste</div>
                            <div className="preview__subtitle">Want to try our beans?</div>
                            <Link to='/coffee-app/our-coffee' onClick={() => this.props.headerChanged(2)} className="preview__btn">More</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <section className="about">
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3}}>
                        <div className="title">About Us</div>
                        <img className="beanslogo" src={beansLogoBlack} alt="Beans logo" />
                        <div className="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br /><br />

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <BestGoods />
        </>
    )
}

export default MainPage;