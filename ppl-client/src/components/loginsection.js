import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginFormChange, LoginFormSubmit, remember_me } from "../actions";

class LoginSection extends React.Component {
  componentDidMount() {
    this.props.rememberMe();
  }

  render() {
    if (this.props.redirect) {
      return <Redirect to="/timeline" />;
    }
    return (
      <div className="login_sec">
        <h1>Log In</h1>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <ul>
            <li>
              <span>Email-ID</span>
              <input
                type="text"
                name="email"
                value={this.props.email}
                placeholder="Enter your email"
                onChange={event => this.props.handleChange(event)}
                required
              />
            </li>
            <li>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={this.props.password}
                placeholder="Enter your password"
                onChange={event => this.props.handleChange(event)}
                required
              />
            </li>
            <li>
              <input
                type="checkbox"
                name="checked"
                checked={this.props.checked}
                onChange={event => this.props.handleChange(event)}
              />
              Remember Me
            </li>
            <li>
              <input type="submit" defaultValue="Log In" />
              <Link to="/forgotpassword">Forgot Password</Link>
            </li>
          </ul>
        </form>
        {this.props.clicked ? (
          !this.props.auth ? (
            <h6>Incorrect Email,password or problem with verification</h6>
          ) : (
            <h6></h6>
          )
        ) : (
          <h6></h6>
        )}
        <div className="addtnal_acnt">
          I do not have any account yet.<Link to="/">My Account Now !</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.update_user.login.email,
    password: state.update_user.login.password,
    redirect: state.update_user.login.redirect,
    auth: state.update_user.login.auth,
    checked: state.update_user.login.checked,
    clicked: state.update_user.login.clicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(loginFormChange(event.target)),
    handleSubmit: event => dispatch(LoginFormSubmit(event)),
    rememberMe: () => dispatch(remember_me)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSection);
