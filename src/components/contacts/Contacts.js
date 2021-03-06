import React, { Component } from 'react';
import Contact from './Contact';

import { Consumer } from '../../Context';

export default class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className='display-4 text-center mb-4'>
                                <span className='text-danger'>Contact</span>{' '}
                                List
                            </h1>
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}
