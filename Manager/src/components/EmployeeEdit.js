/**
 * Created by joelacedo on 10/07/2017.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        });
    }

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextButtonPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    onFireButtonPress() {
        this.setState({ showModal: !this.state.showModal})
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    onDecline() {
        this.setState({ showModal: false})
    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button text="Save Changes" onPress={this.onSaveButtonPress.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextButtonPress.bind(this)} text="Text Schedule"/>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onFireButtonPress.bind(this)} text="Fire"/>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);