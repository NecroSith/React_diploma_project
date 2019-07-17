import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import AppHeader from '../app-header';

const styles = {
    textAlign: 'center',
    display: 'block',
    margin: '50px auto 0 auto'
}

const Error404 = () => {
    return (
        <>
            <div className="banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <AppHeader />
                        </Col>
                    </Row>
                    <h1 className="title-big">Not found</h1>>
                </Container>
            </div>
            <span style={styles}>Oops, It seems this page doesn't exist.</span>
        </>
    )
}

export default Error404;