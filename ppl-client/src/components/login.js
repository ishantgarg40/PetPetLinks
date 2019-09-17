import React from "react";
import LoginRegisterWelcome from "./login_register_welcome";
import LoginSection from "./loginsection";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Login extends React.Component {
  render() {
    if (localStorage.getItem("token") !== null && localStorage.getItem("token") !== "undefined") {
      this.props.history.push("/timeline");
    }
    return (
      <div>
        {/* <meta charSet="utf-8" />
        <title>Login Account</title>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" /> */}
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <Route path={"/login"} component={LoginSection} />
            </div>
            <LoginRegisterWelcome />
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

const mapStateToProps = state => {};

export default connect(mapStateToProps)(Login);
