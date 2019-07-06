import React from 'react';
import CoffeeService from '../../services/service';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc/with-coffee-service';
import {bestLoaded} from '../../actions/';
import BestSellerItem from '../bestseller-item/bestseller-item';
import {Container, Row, Col} from 'reactstrap';

class BestGoods extends React.Component {

    componentDidMount() {
        const service = new CoffeeService()
        service.getBestGoods()
            .then(res => this.props.bestLoaded(res))
            .catch(res => console.log('oh no!' + res));
    }
    render() { 

        const {error, bestGoods} = this.props;

        if (error) {

            return (
                <div>
                    {/* <img src={error502} alt="oh no, server is out there somewhere!" /> */}
                </div>
            )
        }

        const content = bestGoods.map(item => {
            return <BestSellerItem 
                key={item.id}
                bestItem={item}
            />
        })

        return (
            <section className="best">
                <Container>
                    <div className="title">Our best</div>
                    <Row>
                        <Col lg={{ size: 10, offset: 1}}>
                            <div className="best__wrapper">
                                {
                                    content
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bestGoods: state.bestGoods
    }
}

const mapDispatchToProps = {
    bestLoaded
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(BestGoods));