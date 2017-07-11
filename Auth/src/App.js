/**
 * Created by joelacedo on 23/06/2017.
 */
import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
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
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        });
    }

    onButtonPress() {

    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={styles.containerStyle}>
                        <Button
                            onPress={() => firebase.auth().signOut()}
                            text="Log out"/>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large"/>
        }
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10
    }
};

export default App;
