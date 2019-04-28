import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <Router basename='/testcm'>
                    <div className='App'>
                        <Header branding='Contact Manager' />
                        <div className='container'>
                            <Switch>
                                <Route exact path='/' component={Contacts} />
                                <Route
                                    path='/contact/add'
                                    component={AddContact}
                                />
                                <Route
                                    path='/contact/edit/:id'
                                    component={EditContact}
                                />
                                <Route path='/about' component={About} />
                                <Route path='/test' component={Test} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
