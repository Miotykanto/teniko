import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';
import logo from "./logobe.png"



class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return(

           <div class="container h-100 log">
<div class="d-flex justify-content-center h-100">
    <div class="user_card">
        <div class="d-flex justify-content-center">


    

            <div class="brand_logo_container">
                <img src={logo} class="brand_logo" alt="Logo"/>
            </div>
        </div>
        <div class="d-flex justify-content-center form_container" >
            <form onSubmit={ this.handleSubmit } id="fondLogin">
                <div class="input-group mb-3">
                    <div class="input-group-append">
                    
                        {/* <span class="input-group-text"><i class="fas fa-user"></i></span> */}
                      
                        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    </div>
                    <input  class="form-control input_user" 
                      type="email"
                                  placeholder="Email"
                                  className={classnames('form-control form-control-lg', {
                                      'is-invalid': errors.email
                                  })}
                                  name="email"
                                  onChange={ this.handleInputChange }
                                  value={ this.state.email }/>
                </div>
                <div class="input-group mb-2">
                    <div class="input-group-append">
                        {/* <span class="input-group-text"><i class="fas fa-key"></i></span> */}
                        <i class="fa fa-cog fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                    </div>
                    <input  class="form-control input_pass"
                     type="password"
                                 placeholder="Password"
                                 className={classnames('form-control form-control-lg', {
                                     'is-invalid': errors.password
                                 })} 
                                 name="password"
                                 onChange={ this.handleInputChange }
                                 value={ this.state.password } />
                </div>
                <div class="form-group">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                        <label class="custom-control-label" for="customControlInline">Joignez nous vite</label>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-3 login_container">
            <button type="submit" name="button" class="btn login_btn">S'identifier</button>
            
        </div>
            </form>
        </div>
       
	
      
    </div>
</div>
</div>  
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)
