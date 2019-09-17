import React from "react";

export default class SinglePostComment extends React.Component {
  render() {
    return (
      <div className="contnt_3">
        <ul>
          <li>
            <div className="list_image">
              <div className="image_sec">
                <img src="images/post_img.png" />
              </div>
              <div className="image_name">Bharat</div>
            </div>
            <div className="list_info">
              This is an example of a comment. You can create as many comments like this one or sub comments as you like
              and manage all of your content inside your Account.
            </div>
            <input type="button" defaultValue="Reply" className="orng_btn" />
          </li>
          <li>
            <div className="list_image">
              <div className="image_sec">
                <img src="images/post_img.png" />
              </div>
              <div className="image_name">Bharat</div>
            </div>
            <div className="list_info">
              This is an example of a comment. You can create as many comments like this one or sub comments as you like
              and manage all of your content inside your Account.
            </div>
            <input type="button" defaultValue="Reply" className="black_btn" />
            <div className="cmnt_div">
              <input type="text" defaultValue="Add a Comment" className="cmnt_bx" />
              <input type="submit" className="sub_bttn" defaultValue="Submit Comment" />
            </div>
          </li>
          <li>
            <div className="list_image">
              <div className="image_sec">
                <img src="images/post_img.png" />
              </div>
              <div className="image_name">Bharat</div>
            </div>
            <div className="list_info">
              This is an example of a comment. You can create as many comments like this one or sub comments as you like
              and manage all of your content inside your Account.
            </div>
            <input type="button" defaultValue="Reply" className="orng_btn" />
          </li>
          <li>
            <div className="cmnt_div1">
              <input type="text" defaultValue="Enter your Comment" className="cmnt_bx1" />
              <input type="submit" className="sub_bttn1" defaultValue="Submit Comment" />
            </div>
          </li>
        </ul>
        <div className="view_div">
          <a href="#">View more</a>
        </div>
      </div>
    );
  }
}
