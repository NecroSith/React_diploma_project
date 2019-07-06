import React from 'react';
import {connect} from 'react-redux';
import {countryChanged} from '../../actions/';

class ShopFilter extends React.Component {

    render() {

        const {shopItems} = this.props;

        let countries = [];
        for (let i = 0; i < shopItems.length; i++) {
            countries.push(shopItems[i].country);
        }
        countries = [...new Set(countries)];

        const items = countries.map((item, index) => {
            return <button key={index} onClick={() => this.props.countryChanged(item, shopItems)} className="shop__filter-btn">{item}</button>
        })

        return (
            <div className="shop__filter">
                <div className="shop__filter-label">
                    Or filter
                </div>
                <div className="shop__filter-group">
                    {items}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopItems: state.shopItems,
        countryChosen: state.countryChosen
    }
}

const mapDispatchToProps = {
    countryChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopFilter);