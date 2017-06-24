/**
 * Created by joelacedo on 23/06/2017.
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', errorMessage: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ errorMessage: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((error) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail() {
        this.setState({
            errorMessage: 'Authentication Failed',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
                text="Log in"/>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        placeholder="user@email.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}/>
                </CardSection>

                <CardSection>
                    <Input
                        label="Password:"
                        placeholder="password"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}/>
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.errorMessage}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;