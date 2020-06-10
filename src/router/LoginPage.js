import React, { Component } from 'react'
import './LoginPage.css'


class LoginPage extends Component {
    render() {
      return (
        <header className="LoginPage">
            
            <div className="box">
                <h2>Hi!</h2>
                <input type="text" placeholder="id"></input>
                <input type="text" placeholder="password"></input>
                <input type="text" placeholder="name"></input>
                <button>Log in</button>
            </div>
        </header>
      );
    }
  }
  
  export default LoginPage;