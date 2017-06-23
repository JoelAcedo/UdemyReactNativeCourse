/**
 * Created by joelacedo on 23/06/2017.
 */

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Username"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}/>
                </CardSection>

                <CardSection/>

                <CardSection>
                    <Button text="Log in"/>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;