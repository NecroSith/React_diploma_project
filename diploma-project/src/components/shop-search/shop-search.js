import React from 'react';
import {connect} from 'react-redux';
import {findItems} from '../../actions/';

class ShopSearch extends React.Component {

    findItem(e) {
        console.log(e.target.value);
        this.props.findItems(this.props.shopItems, e.target.value);
    }

    render() {
        return (
            <form action="#" className="shop__search">
                <label className="shop__search-label" htmlFor="filter">Looking for</label>
                <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input" onChange={(e) => this.findItem(e)}/>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopItems: state.shopItems
    }
}

const mapDispatchToProps = {
    findItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopSearch);