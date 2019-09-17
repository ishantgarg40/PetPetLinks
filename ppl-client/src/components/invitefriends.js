import React from "react";
import { connect } from "react-redux";
import { addCategoryOptions } from "../actions";

class InviteFriends extends React.Component {
  render() {
    return (
      <div className="rght_btn">
        {" "}
        <span className="rght_btn_icon">
          <img src="images/btn_icona.png" alt="up" />
        </span>{" "}
        <span className="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>{" "}
        <a href="#" onClick={this.props.addOptions}>
          Add Categories
        </a>{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isActive: state.addCategories.isActive
  };
};

const mapDispatchToProps = dispatch => {
  return { addOptions: () => dispatch(addCategoryOptions()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteFriends);
