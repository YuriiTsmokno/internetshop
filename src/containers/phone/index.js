import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

import { fetchPhoneById, addPhoneToBasket } from '../../actions';
import { getPhoneById } from '../../selectors/selectors';
import BasketCart from '../../components/basketCart';

class Phone extends PureComponent {
    componentDidMount() {
        this.props.fetchPhoneById(this.props.match.params.id);
    }

    renderFields = () => {
        const { phone } = this.props;

        const columnFields = R.compose(
            R.toPairs,
            R.pick([
                'size',
                'weight',
                'display',
                'cpu',
                'memory',
                'camera',
                'battery'
            ])
        )(phone);

        return columnFields.map(([ key, value ]) => (
            <div className="column" key={key}>
                <div className="ab-details-title">
                    <p>{ key }</p>
                </div>
                <div className="ab-details-info">
                    <span>{ value }</span>
                </div>
            </div>
        ));
    }

    renderContent = () => {
        const { phone } = this.props;
        return (
            <div className="thumbnail">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            className="img-thumbnail"
                            src={phone.image}
                            alt={phone.name}
                        />
                    </div>
                    <div className="col-md-6">
                        {this.renderFields()}
                    </div>
                </div>
                <div className="caption-full">
                    <h4 className="pull-right">${phone.price}</h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        );
    }

    renderSidebar = () => {
        const { phone, addPhoneToBasket } = this.props;
        return (
            <div>
                <p className="lead">Quick Shop</p>
                <BasketCart />
                <div className="form-group">
                    <h2>{ phone.name }</h2>
                    <h3>${ phone.price }</h3>
                </div>
                <Link to="/" className="btn btn-info btn-block">Back to store</Link>
                <button 
                    className="btn btn-success btn-block"
                    onClick={ () => addPhoneToBasket(phone.id) }
                >
                    Add to cart
                </button>
            </div>
        );
    }

    render() {
        const { phone } = this.props;
        return (
            <div className="view-cotainer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            { phone && this.renderContent() }
                        </div>
                        <div className="col-md-3">
                            { phone && this.renderSidebar() }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        phone: getPhoneById(state, state.phonePage.id)
    }
};

const mapDispatchToProps = {
    fetchPhoneById,
    addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
