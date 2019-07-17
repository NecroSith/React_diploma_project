import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './our-cofee.sass';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';
import coffeeGirl from '../../img/coffee_girl.jpg';
import ShopItemList from '../shop-item-list';
import ShopFilter from '../shop-filter/';
import ShopSearch from '../shop-search/';
import AppHeader from '../app-header';

const OurCoffee = () => {
    return (
        <>
            <div className="banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <AppHeader />
                        </Col>
                    </Row>
                    <h1 className="title-big">Our Coffee</h1>>
                </Container>
            </div>
            <section className="shop">
                <Container>
                    <Row>
                        <Col lg={{size: 4, offset: 2}}>
                            <img className="shop__girl" src={coffeeGirl} alt="girl" />
                        </Col>
                        <Col lg={4}>
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src={beansLogoBlack} alt="Beans logo" />
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br /><br />
                                Afraid at highly months do things on at. Situation recommend objection do intention<br />
                                so questions. <br />
                                As greatly removed calling pleased improve an. Last ask him cold feel<br />
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                                is song that held help face.
                            </div>
                        </Col>
                    </Row>
                    <div className="line"></div>
                    <Row>
                        <Col lg={{size: 3, offset: 2}}>
                            <ShopSearch />
                        </Col>
                        <Col lg={5}>
                            <ShopFilter />
                        </Col>
                    </Row>
                    <Row>
                        <ShopItemList />
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OurCoffee;