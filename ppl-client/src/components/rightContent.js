import React from "react";
import UploadButton from "./uploadbtn";
import InviteFriends from "./invitefriends";
import Categories from "./categories";
import Featured from "./featured";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import {
  addCategoryInputChange,
  addCategorySubmit,
  handleDrop,
  initialFetch,
  handleDropzoneForUploadPost,
  handleUploadPostSubmit,
  selectedCategory
} from "../actions";

class RightContent extends React.Component {
  async componentDidMount() {
    await this.props.initialFetch();
  }
  render() {
    console.log("all categories", this.props.category);
    console.log("isBtnActive", this.props.isBtnActive);
    console.log("filedata upload posts", this.props.filedata);
    console.log("this is selected tag-------->", this.props.uploadCategory);
    return (
      <div className="content_rgt">
        {/*=================Upload Button=====================*/}
        <UploadButton />
        {this.props.isBtnActive && (
          <form onSubmit={event => this.props.handleUploadPostSubmit(event)}>
            <input type="text" value={this.props.title} onChange={this.props.handleChange} name="title" />
            <Dropzone
              multiple={false}
              onDrop={file => {
                console.log("filedata---->", file[0]);
                this.props.handleOnDropping(file[0]);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>
            <select name="category" id="select_tag" onChange={event => this.props.selectedCategory(event)}>
              <option selected>select category</option>
              {this.props.category.map(category => (
                <option value={category._id}>{category.title}</option>
              ))}
            </select>
            <br />
            <button type="submit">upload post</button>
          </form>
        )}
        {/*==============Invitation to Friends===================*/}
        <InviteFriends />
        {this.props.isActive && (
          <form onSubmit={event => this.props.handleSubmit(event)}>
            <h5>name:</h5>
            <input name="title" value={this.props.title} onChange={event => this.props.handleChange(event)} required />
            <Dropzone
              multiple={false}
              onDrop={file => {
                console.log("filedata---->", file[0]);
                this.props.handleOnDrop(file[0]);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>
            <button type="submit">Add</button>
          </form>
        )}
        {/*==============Categories of Animals====================*/}
        <Categories />
        {/*====================Featured==================================*/}
        <Featured />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isActive: state.addCategories.isActive,
    title: state.addCategories.title,
    isBtnActive: state.timeline.uploadPosts.isBtnActive,
    category: state.addCategories.category,
    filedata: state.timeline.uploadPosts.filedata,
    uploadCategory: state.timeline.uploadPosts.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(addCategoryInputChange(event)),
    handleSubmit: event => dispatch(addCategorySubmit(event)),
    handleOnDrop: file => dispatch(handleDrop(file)),
    initialFetch: () => dispatch(initialFetch()),
    handleOnDropping: file => dispatch(handleDropzoneForUploadPost(file)),
    selectedCategory: event => dispatch(selectedCategory(event)),
    handleUploadPostSubmit: event => dispatch(handleUploadPostSubmit(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightContent);
