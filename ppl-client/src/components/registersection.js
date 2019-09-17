import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerFormChange, SignupFormSubmit } from "../actions";

class RegisterSection extends React.Component {
  render() {
    const { redirect } = this.props;
    if (redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="register_sec">
        <h1>Create An Account</h1>
        <form onSubmit={event => this.props.handleSubmit(event)} method="POST">
          <ul>
            <li>
              <span>Username</span>
              <input
                type="text"
                name="username"
                value={this.props.username}
                onChange={event => this.props.handleChange(event)}
                placeholder="Enter your username"
                required
              />
            </li>
            <li>
              <span>Password</span>
              <input
                type="text"
                name="password"
                value={this.props.password}
                onChange={event => this.props.handleChange(event)}
                placeholder="Enter your password"
                required
              />
            </li>
            <li>
              <span>Email</span>
              <input
                type="text"
                name="email"
                value={this.props.email}
                onChange={event => this.props.handleChange(event)}
                placeholder="Enter your email"
                required
              />
            </li>
            <li>
              <span>First Name</span>
              <input
                type="text"
                name="firstname"
                value={this.props.firstname}
                onChange={event => this.props.handleChange(event)}
                placeholder="Enter your first name"
                required
              />
            </li>
            <li>
              <span>Last Name</span>
              <input
                type="text"
                name="lastname"
                value={this.props.lastname}
                onChange={event => this.props.handleChange(event)}
                placeholder="Enter your last name"
                required
              />
            </li>
            <li>
              <input
                type="checkbox"
                checked={this.props.checked}
                onChange={event => this.props.handleChange(event)}
                required
              />
              I agree to Term &amp; Conditions
            </li>
            <li>
              <input type="submit" defaultValue="Register" />
            </li>
          </ul>
        </form>
        {this.props.clicked ? (
          this.props.alreadyExist ? (
            <h6>User Already Exist</h6>
          ) : (
            <h6>User Registered! Check Your Email</h6>
          )
        ) : (
          <h6></h6>
        )}
        <div className="addtnal_acnt">
          I already have an account.<Link to="/login">Login My Account !</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.update_user.register.username,
    password: state.update_user.register.password,
    email: state.update_user.register.email,
    firstname: state.update_user.register.firstname,
    lastname: state.update_user.register.lastname,
    redirect: state.update_user.register.redirect,
    alreadyExist: state.update_user.register.alreadyExist,
    clicked: state.update_user.register.clicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(registerFormChange(event.target)),
    handleSubmit: event => dispatch(SignupFormSubmit(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterSection);
