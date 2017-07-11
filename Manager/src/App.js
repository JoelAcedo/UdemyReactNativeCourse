/**
 * Created by joelacedo on 25/06/2017.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router'

const config = {
    apiKey: "AIzaSyDNIowgVzwyHRhLKlSqPAJtUQu9Nbax2-s",
    authDomain: "manager-4f5e0.firebaseapp.com",
    databaseURL: "https://manager-4f5e0.firebaseio.com",
    projectId: "manager-4f5e0",
    storageBucket: "",
    messagingSenderId: "537564717360"
};

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;