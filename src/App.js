import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';

class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">

            {this.props.isLoggedIn
              ? <h2>Welcome {this.props.userName}</h2>
              : <h2>Please Log In</h2>
            }
            {this.props.isLoggedIn
              ? <Link to="/">log out</Link>
              : <Link to="/">log in</Link>
            }
            <Link to="/home">Home</Link>
            <Link to="/settings">settings</Link>
            <Link to="/about">about</Link>
            <Link to="/messages">messages</Link>
          </header>
          <Login />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userName: state.userReducer.userName,
    isLoggedIn: state.userReducer.loginState === 'LOGGED_IN',
  };
};

const mapDispatchToProps = {};

export default connect( // from react-redux
  mapStateToProps,
  mapDispatchToProps
)(App);
