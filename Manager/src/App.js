/**
 * Created by joelacedo on 25/06/2017.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;