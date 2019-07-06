import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './our-cofee.sass';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';
import coffeeGirl from '../../img/coffee_girl.jpg';
import ShopItemList from '../shop-item-list';
import ShopFilter from '../shop-filter/';


const OurCoffee = () => {
    return (
        <section className="shop">
            <Container>
                <Row>
                    <div className="col-lg-4 offset-2">
                        <img className="shop__girl" src={coffeeGirl} alt="girl" />
                    </div>
                    <div className="col-lg-4">
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
                    </div>
                </Row>
                <div className="line"></div>
                <Row>
                    <Col lg={{size: 4, offset: 2}}>
                        <form action="#" className="shop__search">
                            <label className="shop__search-label" htmlFor="filter">Looking for</label>
                            <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input" />
                        </form>
                    </Col>
                    <Col lg={4}>
                        <ShopFilter />
                    </Col>
                </Row>
                <Row>
                    <ShopItemList />
                </Row>
            </Container>
        </section>
    )
}

export default OurCoffee;