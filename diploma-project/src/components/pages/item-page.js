import React from 'react';
import logoBlack from '../../logo/Beans_logo_dark.svg';
import {expandDescription} from '../../actions/';
import {connect} from 'react-redux';

const imageStyle = {
    width: '100%'
}

class ItemPage extends React.Component {

    render() {
        const {country, description, url, price} = this.props.selectedItem;

        return (
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <img style={imageStyle} className="shop__girl" src={url} alt="coffee_item" />
                        </div>
                        <div className="col-lg-4">
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
                        </div>
                    </div>
                </div>
            </section>
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