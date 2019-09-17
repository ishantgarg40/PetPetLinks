import React from "react";
import LoginRegisterWelcome from "./login_register_welcome";
import RegisterSection from "./registersection";

export default class Register extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/timeline");
    }
  }

  render() {
    return (
      <div>
        {/* <meta charSet="utf-8" />
        <title>Create An Account</title>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" /> */}
        {/* {this.props.onChange(false)} */}
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <RegisterSection />
            </div>
            <LoginRegisterWelcome />
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
