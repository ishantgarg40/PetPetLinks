import React from "react";
import { connect } from "react-redux";
import { forgotFormChange, forgotFormSubmit } from "../actions";

class ForgotPassRegister extends React.Component {
  render() {
    return (
      <div className="register_sec">
        <h1>Forgot Password</h1>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <ul>
            <li>
              <span>Enter E-mail ID</span>
              <input
                type="text"
                name="email"
                value={this.props.email}
                onChange={event => this.props.handleChange(event)}
                placeholder="User@gmail.com"
              />
            </li>
            <li>
              <input type="submit" defaultValue="Submit" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.update_user.forgotpassword.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(forgotFormChange(event)),
    handleSubmit: event => dispatch(forgotFormSubmit(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassRegister);
