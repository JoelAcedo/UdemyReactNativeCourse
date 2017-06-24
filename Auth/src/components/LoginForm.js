/**
 * Created by joelacedo on 23/06/2017.
 */

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

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

                <CardSection>
                    <Button text="Log in"/>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;