import React from 'react';
import logoBlack from '../../logo/Beans_logo_dark.svg';
import {expandDescription} from '../../actions/';
import {connect} from 'react-redux';
import AppHeader from '../app-header';
import {Container, Col, Row} from 'reactstrap';

const imageStyle = {
    width: '100%'
}

class ItemPage extends React.Component {

    render() {
        const {country, description, url, price} = this.props.selectedItem;

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
                            <Col lg={{size: 5, offset: 1}}>
                                <img style={imageStyle} className="shop__girl" src={url} alt="coffee_item" />
                            </Col>
                            <Col lg={4}>
                                <div className="title">About it</div>
                                <img className="beanslogo" src={logoBlack} alt="Beans logo" />
                                <div className="shop__point">
                                    <span>Country: </span>
                                    {country}
                                </div>
                                <div className="shop__point" onClick={() => this.props.expandDescription(this.props.selectedItem)}>
                                    <span>Description: </span>
                                    {description}
                                </div>
                                <div className="shop__point">
                                    <span>Price: </span>
                                    <span className="shop__point-price">{price}</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedItem: state.selectedItem
    }
}

const mapDispatchToProps = {
    expandDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);