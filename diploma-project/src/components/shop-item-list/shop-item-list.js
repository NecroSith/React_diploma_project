import React from 'react';
import {Col} from 'reactstrap';
import CoffeeService from '../../services/service';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc/with-coffee-service';
import {shopLoaded, itemSelected} from '../../actions';
import ShopItem from '../shop-item/';
import Spinner from '../spinner';
import {Link} from 'react-router-dom';

class ShopItemList extends React.Component {

    componentDidMount() {

        const coffeeService = new CoffeeService();
        coffeeService.getShopItems()
            .then(res => this.props.shopLoaded(res))
            .catch(err => console.log('oh no, coffee' + err))
    }

    render() {
        const {filterResults, shopItems, loading} = this.props;
        
        let items = {};
        if (filterResults.length == 0) {
            items = shopItems.map((item, index) => {
                return <Link key={index} to={`/our-coffee/${index+1}`} onClick={() => this.props.itemSelected(item, index+1)} >
                        <ShopItem 
                            shopItem={item}
                            />
                    </Link> 
            })
        }
        else {
            items = filterResults.map((item, index) => {
                return <ShopItem 
                        key={index}
                        shopItem={item}
                        />
            })
        }
        
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
        filterResults: state.filterResults,
        shopItems: state.shopItems,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    shopLoaded,
    itemSelected
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(ShopItemList));