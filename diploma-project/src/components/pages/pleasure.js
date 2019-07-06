import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './our-cofee.sass';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';
import coffeeItem from '../../img/coffee_mug.png';
import GoodsList from '../goods-list/';


const Pleasure = () => {
    return (
        <section className="shop">
            <Container>
                <Row>
                    <div className="col-lg-4 offset-2">
                        <img className="shop__girl" src={coffeeItem} alt="girl" />
                    </div>
                    <div className="col-lg-4">
                        <div className="title">About our goods</div>
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
                    <GoodsList />
                </Row>
            </Container>
        </section>
    )
}

export default Pleasure;