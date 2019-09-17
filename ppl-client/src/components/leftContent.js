import React from "react";
import DisplayProfile from "./dp";
import Posts from "./posts";

export default class LeftContent extends React.Component {
  render() {
    return (
      <div className="content_lft">
        {/*============Diplay Picture and Some Information==============*/}
        <DisplayProfile />
        {/*=============These are Posts==================================*/}
        <Posts />
      </div>
    );
  }
}
