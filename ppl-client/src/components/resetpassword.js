import React from "react";
import LoginRegisterWelcome from "./login_register_welcome";
import ResetForm from "./resetform";

export default class ResetPassword extends React.Component {
  render() {
    return (
      <div>
        {/* <meta charSet="utf-8" />
        <title>Reset Password</title>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" /> */}
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <ResetForm />
            </div>
            <LoginRegisterWelcome />
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
