import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/index';
import SignIn from './Login/index';
import Role from './Roles/index';
import Center from './centers/index';
import Sidebar from './Sidebar/index';

class Global extends Component {
    render() {
        return (
            <React.Fragment>
                <Sidebar/>
               <Switch> 
                    <Route path = '/signin' component = {SignIn} exact />
                    <Route path = '/dashboard' component = {Dashboard}/>
                    <Route path = '/userrole' component = {Role} />
                    <Route path = '/centers' component = {Center} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Global;