import React from 'react';
import {Col} from 'reactstrap';
import CoffeeService from '../../services/service';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc/with-coffee-service';
import {shopLoaded} from '../../actions';
import ShopItem from '../shop-item/';
import Spinner from '../spinner';

class ShopItemList extends React.Component {

    componentDidMount() {

        const coffeeService = new CoffeeService();
        coffeeService.getShopItems()
            .then(res => this.props.shopLoaded(res))
            .catch(err => console.log('oh no, coffee' + err))
    }

    render() {
        const {shopItems, loading} = this.props;

        const items = shopItems.map((item, index) => {
            return <ShopItem 
                    key={index}
                    shopItem={item}
                    />
        })

        console.log(loading);

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
        shopItems: state.shopItems,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    shopLoaded
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(ShopItemList));