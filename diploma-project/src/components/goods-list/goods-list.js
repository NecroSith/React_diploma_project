import React from 'react';
import {Col} from 'reactstrap';
import CoffeeService from '../../services/service';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc/with-coffee-service';
import {goodsLoaded} from '../../actions';
import GoodsItem from '../goods-item/';
import Spinner from '../spinner';

class GoodsList extends React.Component {

    componentDidMount() {

        const coffeeService = new CoffeeService();
        coffeeService.getGoods()
            .then(res => this.props.goodsLoaded(res))
            .catch(err => console.log('oh no, goods' + err))
    }

    render() {
        const {goods, loading} = this.props;

        const items = goods.map((item, index) => {
            return <GoodsItem 
                    key={index}
                    goods={item}
                    />
        })

        const content = loading ? <Spinner /> : items;

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
        loading: state.loading
    }
}

const mapDispatchToProps = {
    goodsLoaded
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(GoodsList));