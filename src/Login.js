import React from 'react';
import { connect } from 'react-redux';
import {
  updateUserName,
  updatePassWord,
  submitAction,
} from './redux/actions/userActions';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input
            onChange={(e) => {
              this.props.updateUserName(e.target.value);
            }}
            value={this.props.userName}
            type="text"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              this.props.updatePassWord(e.target.value);
            }}
            value={this.props.passWord}
            type="password"
          />
        </div>
        <div>
          <button onClick={this.props.submitAction}>Log In</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // these show up as values
    userName: state.userReducer.userName,
    passWord: state.userReducer.passWord,
    loginState: state.userReducer.loginState,
  };
}

const mapDispatchToProps = {
  // these show up as functions
  updateUserName,
  updatePassWord,
  submitAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);