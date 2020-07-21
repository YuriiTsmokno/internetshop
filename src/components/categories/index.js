import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as R from 'ramda';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { getCategories, getActiveCategoryId } from '../../selectors/selectors';

const Categories = ({ categories, activeCategoryId }) => {
    const getActiveState = R.propEq('id', activeCategoryId);

    const renderCategory = (category, index) => {
        const linkClass = classNames({
            'list-group-item': true,
            'active': getActiveState(category)
        });

        return (
            <Link
                to={`/categories/${category.id}`}
                className={linkClass}
                key={index}
            >
                {category.name}
            </Link>
        )
    }

    const renderAllCategories = () => {
        const linkClass1 = classNames({
            'list-group-item': true,
            'active': R.isNil(activeCategoryId)
        });

        return (
            <Link to={'/'} className={linkClass1} >All</Link>
        );

    }


    return (
        <div className="well">
            <h4>Brand</h4>
            <div className="list-group">
                { renderAllCategories() }
                { categories && categories.map((category, index) => renderCategory(category, index)) }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
});

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(Categories);