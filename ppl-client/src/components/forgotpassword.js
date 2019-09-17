import React from "react";
import LoginRegisterWelcome from "./login_register_welcome";
import ForgotPassRegister from "./forgotpassregister";

export default class ForgotPassword extends React.Component {
  render() {
    return (
      <div>
        {/* <meta charSet="utf-8" />
        <title>Forgot Password</title>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" /> */}
        {/* <PopUp /> */}
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <ForgotPassRegister />
            </div>
            <LoginRegisterWelcome />
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
