/**
 * Created by joelacedo on 26/06/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common';
import { emailChanged }from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password:"
                        placeholder="password"
                    />
                </CardSection>

                <CardSection>
                    <Button text="Login"/>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, { emailChanged })(LoginForm);