/**
 * Created by joelacedo on 03/07/2017.
 */
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmplyeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Please Login"/>
            </Scene>

            <Scene key="main">
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}/>
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create employee"/>
                <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit employee"/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;