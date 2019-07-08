import React from 'react';
import {Col} from 'reactstrap';
import CoffeeService from '../../services/service';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc/with-coffee-service';
import {goodsLoaded, goodsError} from '../../actions';
import GoodsListItem from '../goods-list-item';
import Spinner from '../spinner';
import oops from '../../img/oops.png';

class GoodsList extends React.Component {

    componentDidMount() {

        const coffeeService = new CoffeeService();
        coffeeService.getGoods()
            .then(res => this.props.goodsLoaded(res))
            .catch(err => this.props.goodsError(err))
    }

    componentDidCatch() {
        this.props.goodsError();
    }

    render() {
        const {error, goods, loading} = this.props;

        const items = goods.map((item, index) => {
            return <GoodsListItem 
                            key={index}
                            goods={item}
                    />
        })

        const content = loading ? <Spinner /> : items;

        if (error) {

            return (
                <div>
                    <img src={oops} alt="oh no, server is out there somewhere!" />
                </div>
            )
        }

        return (
            <Col lg={{size: 10, offset: 1}}>
                <div className="shop__wrapper">
                    {
                        content
                    }
                </div>
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    goodsLoaded,
    goodsError
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(GoodsList));