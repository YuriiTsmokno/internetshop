import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

import { 
    fetchPhones, 
    loadMorePhones, 
    addPhoneToBasket, 
    fetchCategories 
} from '../../actions/index';
import { getPhones } from '../../selectors/selectors';
import Layout from '../layout';

class Phones extends PureComponent {
    componentDidMount() {
        this.props.fetchPhones();
        this.props.fetchCategories();
    }

    renderPhone(phone, index) {
        const shortDescription = `${R.take(60, phone.description)}...`;
        const { addPhoneToBasket } = this.props;
        
        return (
            <div className="col-sm-4 col-md-4 col-lg-4 book-list" key={index}>
                <div className="thumbnail">
                    <img
                        className="img-thumbnail"
                        src={phone.image}
                        alt={phone.name} 
                    />
                    <div className="caption">
                        <h4 className="pull-right">${phone.price}</h4>
                        <h4>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                        </h4>
                        <p>{shortDescription}</p>
                        <p className="itemButton">
                            <button 
                                className="btn btn-primary"
                                onClick={() => addPhoneToBasket(phone.id)}
                                >
                                Buy now!
                            </button>
                            <Link 
                                to={`/phones/${phone.id}`}
                                className="btn btn-default"
                            >
                                More info
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { phones, loadMorePhones } = this.props;
        return (
            <>
                <Layout>
                    <div className="row books">
                        {phones.map((phone, index) => this.renderPhone(phone, index))}
                    </div>
                    <div className="row">
                        <button 
                            onClick={loadMorePhones}
                            className="pull-right btn btn-primary"
                        >
                            Load More
                        </button>
                    </div>
                </Layout>
                <div className="footer"></div>
            </>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    phones: getPhones(state, ownProps)
});

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);