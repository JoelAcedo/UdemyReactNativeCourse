/**
 * Created by joelacedo on 26/06/2017.
 */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChange, loginUser }from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
    }

    onLoginButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password })
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>
        }

        return (
            <Button
                text="Login"
                onPress={this.onLoginButtonPress.bind(this)}/>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password:"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorMessage}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorMessage: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChange, loginUser })(LoginForm);