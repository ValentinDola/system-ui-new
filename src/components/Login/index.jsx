import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../../assets/assets/scss/style.scss';

const emailRegex = RegExp(/^[a-zA-Z0-9,!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors , ...rest }) => {

    let valid = true;

    Object.values(formErrors).forEach(value => {
        value.length > 0 && (valid = false)
    });

    Object.values(rest).forEach(value => {
        value === '' && (valid = false)
    });

    return valid;
}


class SignIn extends Component {

    state = {
        email : [],
        password : [],
        rememberMe : false,
        formErrors : {
            email : [],
            password : []
        }
       
    }


    handleChange = e => {

        let {name, value} = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            
             case 'email':
                formErrors.email = 
                emailRegex.test(value) ? 
                '': 'invalid Email';
                break;
                case 'password' : 
                formErrors.password = 
                value.length < 3 ?
                'minimum 3 character required': '';
                break;
        
            default:
                break;
        }
        this.setState( { formErrors , [name] : value }, () => {
            console.log(this.state);
        } )
    }

    handleSubmit = e => {
        e.preventDefault();
        // if ( formValid (this.state) ) {

        //     firebase 
        //     .auth ()
        //     .signInWithEmailAndPassword( this.state.email, this.state.password )
        //     .then ( signedUser  => {
                
        //         console.log (signedUser);
        //         console.log('You Signed In');
        //         this.props.history.push('/dashboard');

        //     } )
        //     .catch ( err => {
        //         console.log(err);
        //     } ) 
        // }
    }

    handleRemember = () => {
        this.setState({ rememberMe : !this.state.rememberMe })
    }

    render () {
        const {email, password, formErrors}  = this.state;
        return(
            
                
                <div className="auth-wrapper">
                    <div className="auth-content  ">
                        
                        <div className="card  shadow-2 ">
                            <div className="card-body text-center">
                                <form onSubmit = {this.handleSubmit} >
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input name = 'email' type="text" 
                                    className={`form-control ${formErrors.email.length > 0 ? 'error' : null }  `}
                                     placeholder="Email"
                                       value = {email}
                                       onChange = {this.handleChange} />
                                        
                                </div>
                                <div className="input-group mb-4">
                                    <input name = 'password' type="password" 
                                className={ ` form-control ${formErrors.password.length > 0 ? 'error' : null}`}
                                 placeholder="password"
                                    value = {password} onChange = {this.handleChange} />
                                    
                                </div>
                                {/* <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="rememberMe" id="rememberMe"  onChange = {this.handleRemember} />
                                            <label htmlFor="rememberMe" className="cr"> Remember Me</label>
                                    </div>
                                </div> */}
                                <button className="btn btn-primary shadow-2 mb-4">Login</button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
        );
    }
}

export default SignIn;