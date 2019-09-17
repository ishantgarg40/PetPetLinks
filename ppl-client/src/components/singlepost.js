import React from "react";
import RightContent from "./rightContent";
import SinglePostImage from "./single_post_image";
import SinglePostComment from "./single_post_comment";

export default class SinglePost extends React.Component {
  render() {
    return (
      <div>
        {/* <meta charSet="utf-8" />
        <title>Singal Post</title>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" /> */}
        <div className="container">
          <div className="content">
            <RightContent />
            <div className="content_lft">
              <div className="contnt_2">
                <SinglePostImage />
              </div>
              <SinglePostComment />
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
