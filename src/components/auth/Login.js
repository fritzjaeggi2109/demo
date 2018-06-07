import React from 'react';
import './login.css';
import credentials from './credentials.json';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        }
    }
    makeLogin() {
        const { user, password } = this.state;
        if(user !== '' && password !== ''){
            if ( user !== credentials.user && password !== credentials.password ){
                alert('error');
            }else{
                this.props.makeLogin(true, user);
            }
        }
    }

    onUserInputChange(e) {
        this.setState({
            user: e.target.value
        });
    }

    onPasswordInputChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        let { user, password } = this.state;
        return (
            <div className="login-container">
                <h3 id="login-title">Log In</h3>
                <input
                    value={ user } 
                    className="form-input" 
                    type="text" 
                    placeholder="User"
                    onChange={(e) => this.onUserInputChange(e)}
                />
                <input
                    value={ password } 
                    type="password" 
                    className="form-input" 
                    placeholder="Password" 
                    onChange={(e) => this.onPasswordInputChange(e)}
                />
                <button 
                    id="login-btn" 
                    onClick={this.makeLogin.bind(this)}
                >
                    Ok
                </button>
            </div>
        );
    }
};

export default Login;