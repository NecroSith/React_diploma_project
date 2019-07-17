import React from 'react';
import './app-footer.sass';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';
import {Container, Row, Col} from 'reactstrap';
import NavigationBlock from '../navigation-block/navigation-block';
import logoBlack from '../../logo/Logo_black.svg';

class AppFooter extends React.Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col lg={{size: 7, offset: 3}}>
                            <NavigationBlock wrapperClass='footer' logo={logoBlack}/>
                        </Col>
                    </Row>
                    <img className="beanslogo" src={beansLogoBlack} alt="Beans logo" />
                </Container>
            </footer>
        )
    }
}

export default AppFooter;