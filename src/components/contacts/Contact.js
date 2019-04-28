import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Consumer } from '../../Context';

export class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };

    onDeleteClick = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card card-body mb-3'>
                            <h4>
                                <span
                                    onClick={this.onShowClick}
                                    style={{ cursor: 'pointer' }}>
                                    {name}{' '}
                                    <i
                                        className='fas fa-sort-down'
                                        style={{ cursor: 'pointer' }}
                                    />
                                </span>

                                <i
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                    className='fas fa-trash fa-sm'
                                    style={{
                                        float: 'right',
                                        cursor: 'pointer',
                                        color: '#ff0000'
                                    }}
                                />

                                <Link to={`contact/edit/${id}`}>
                                    <i className='fas fa-pencil-alt fa-sm' style={{cursor: 'ponter', float: 'right', color: '#000', marginRight: '1rem'}} />
                                </Link>
                            </h4>
                            {showContactInfo ? (
                                <ul className='list-group'>
                                    <li className='list-group-item'>
                                        Email: {email}
                                    </li>
                                    <li className='list-group-item'>
                                        Phone: {phone}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
