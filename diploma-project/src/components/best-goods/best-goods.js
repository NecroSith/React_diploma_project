import React from 'react';
import CoffeeService from '../../services/service';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc/with-coffee-service';
import {bestLoaded, bestError} from '../../actions/';
import BestSellerItem from '../bestseller-item/bestseller-item';
import {Container, Row, Col} from 'reactstrap';
import Spinner from '../spinner';
import oops from '../../img/oops.png';


class BestGoods extends React.Component {

    componentDidMount() {
        const service = new CoffeeService()
        service.getItems('bestsellers')
            .then(res => this.props.bestLoaded(res))
            .catch(res => this.props.bestError());
    }

    componentDidCatch() {
        this.props.bestError();
    }

    render() { 

        const {error, bestGoods, loading} = this.props;

        if (error) {

            return (
                <div className="error-block">
                    <img src={oops} alt="oh no, server is out there somewhere!" />
                </div>
            )
        }

        const content = bestGoods.map((item, index) => {
            return <BestSellerItem 
                        key={index}
                        bestItem={item}
                    />
        })

        const data = loading ? <Spinner /> : content;
 
        return (
            <section className="best">
                <Container>
                    <div className="title">Our best</div>
                    <Row>
                        <Col lg={{ size: 10, offset: 1}}>
                            <div className="best__wrapper">
                                {
                                    data
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
        bestGoods: state.bestGoods,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    bestLoaded,
    bestError
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(BestGoods));