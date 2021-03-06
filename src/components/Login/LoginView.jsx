import React from 'react';
import { Link } from 'react-router'
import Title from './../TitleView.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

class LoginView extends React.Component {
  constructor() {
    super()
    this.state = {
      login: true,
    }
  }

  switchPage() {
    this.setState({
      login: !this.state.login,
    })
  }

  render() {
    return (
      <div className="Login">
        <Title/>
        <div className="LoginBox">
          {this.state.login ? <h3>Login</h3> : <h3>Sign up</h3>}
          {this.state.login ? (<Login/>) : (<Signup/>)}
          <p className="switchLogin">{this.state.login ? 'New?' : "Already have an account?"} <a className="Link" onClick={this.switchPage.bind(this)}>{this.state.login ? "Sign up!" : "Log-in!"}</a></p>
        </div>
      </div>
    );
  }
}

export default LoginView;