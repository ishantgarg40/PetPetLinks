import React from "react";
import { connect } from "react-redux";

class Categories extends React.Component {
  render() {
    return (
      <div className="rght_cate">
        <div className="rght_cate_hd" id="rght_cat_bg">
          Categories
        </div>
        <div className="rght_list">
          <ul>
            {this.props.category.map(category => (
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img
                      src={"http://localhost:8080/" + category.filedata.filename}
                      alt="up"
                      width="30px"
                      height="30px"
                    />
                  </span>{" "}
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.addCategories.category
  };
};

export default connect(mapStateToProps)(Categories);
