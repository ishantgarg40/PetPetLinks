import React from "react";
import { connect } from "react-redux";
import { handleUploadPostClick } from "../actions";

class UploadButton extends React.Component {
  render() {
    return (
      <div className="rght_btn">
        {" "}
        <span className="rght_btn_icon">
          <img src="images/btn_iconb.png" alt="up" />
        </span>{" "}
        <span className="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>{" "}
        <a href="#" onClick={event => this.props.handleClick(event)}>
          Upload Post
        </a>{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: event => dispatch(handleUploadPostClick(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadButton);
