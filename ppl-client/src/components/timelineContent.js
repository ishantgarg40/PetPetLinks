import React from "react";
import RightContent from "./rightContent";
import LeftContent from "./leftContent";

export default class TimeLineContent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          {/*================Timeline's Right Side Content=======================*/}
          <RightContent />
          {/*==================Timeline's Left Side Content========================*/}
          <LeftContent />
        </div>
        <div className="clear" />
      </div>
    );
  }
}
