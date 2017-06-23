/**
 * Created by joelacedo on 23/06/2017.
 */
import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

let firebaseConfig = {
    apiKey: 'AIzaSyBcTK-rijiemgTFzansGt3qcsgDhdhMmw4',
    authDomain: 'authudemy-41166.firebaseapp.com',
    databaseURL: 'https://authudemy-41166.firebaseio.com',
    projectId: 'authudemy-41166',
    storageBucket: 'authudemy-41166.appspot.com',
    messagingSenderId: '29764201272'
};

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;
