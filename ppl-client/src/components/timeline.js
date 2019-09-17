import React from "react";
import TimeLineContent from "./timelineContent";
import { connect } from "react-redux";
import { tokenVerification, loader } from "../actions";
import { Link } from "react-router-dom";

class TimeLine extends React.Component {
  async componentDidMount() {
    try {
      if (localStorage.getItem("token") === null || localStorage.getItem("token") == "undefined") {
        this.props.history.push("/login");
      }

      if (this.props.user == null) {
        console.log("token verification");
        await this.props.tokenVerification();
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  componentWillUnmount() {
    this.props.loader();
  }
  render() {
    console.log("this is user", this.props.user);
    if (this.props.isLoading) {
      console.log("loading...");
      return <h1>Loading.....</h1>;
    } else {
      return (
        <div>
          <TimeLineContent />
        </div>
      );
    }
  }
}

const mapStatetoProps = state => {
  return {
    isLoading: state.isLoading,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tokenVerification: () => dispatch(tokenVerification()),
    loader: () => dispatch(loader)
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(TimeLine);
