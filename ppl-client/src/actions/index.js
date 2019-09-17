import axios from "axios";

export const registerFormChange = event => {
  return {
    type: "form_change",
    payload: event
  };
};

export const loginFormChange = event => {
  return {
    type: "login_form_change",
    payload: event
  };
};

export const SignupFormSubmit = event => async (dispatch, getState) => {
  event.preventDefault();
  let response = await axios.post("http://localhost:8080/user/signup", getState().update_user.register);
  dispatch({
    type: "register_response",
    payload: response.data
  });
};

export const LoginFormSubmit = event => async (dispatch, getState) => {
  event.preventDefault();
  let response = await axios.post("http://localhost:8080/user/login", {
    email: getState().update_user.login.email,
    password: getState().update_user.login.password
  });
  console.log(response);
  dispatch({
    type: "login_response",
    payload: response.data
  });
};

export const remember_me = {
  type: "rememberme"
};

export const tokenVerification = () => async (dispatch, getState) => {
  let response = await axios.post(
    "http://localhost:8080/user/verifytoken",
    { tokenVerification: "dummyData" },
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `JWT ${localStorage.getItem("token")}`
      }
    }
  );
  console.log(response);
  dispatch({
    type: "token_status",
    payload: response.data.authData
  });
};

export const loader = {
  type: "loading"
};

export const forgotFormChange = event => {
  return {
    type: "forgot_form_change",
    payload: event
  };
};

export const forgotFormSubmit = event => async (dispatch, getState) => {
  event.preventDefault();
  let response = await axios.post("http://localhost:8080/user/forgotpass", {
    email: getState().update_user.forgotpassword.email
  });
  console.log(response);
  dispatch({
    type: "forgot_pass_submit",
    payload: response.data
  });
};

export const addCategoryOptions = () => {
  console.log("dispatched");
  return { type: "add_category_options" };
};

export const addCategoryInputChange = event => {
  return {
    type: "add_category_input_change",
    payload: event
  };
};

export const addCategorySubmit = event => async (dispatch, getState) => {
  event.preventDefault();
  let formdata = new FormData();
  console.log(getState().addCategories.title);
  console.log("formdata file....", getState().addCategories.filedata);
  formdata.append("title", getState().addCategories.title);
  formdata.append("filedata", getState().addCategories.filedata);
  console.log("form get....", formdata.get("filedata"));
  let response = await axios.post("http://localhost:8080/posts/postcategory", formdata);
  console.log("response of post categories call------>", response);
  dispatch({
    type: "response_of_add_category",
    payload: response.data
  });
};

export const handleDrop = file => {
  return {
    type: "on_drop",
    payload: file
  };
};

export const initialFetch = () => async (dispatch, getState) => {
  let response = await axios.get("http://localhost:8080/posts/fetchcategories");
  console.log("initial fetch ------>", response);
  dispatch({
    type: "initial_fetch_category",
    payload: response
  });
};

export const handleUploadPostClick = event => {
  console.log("upload btn click ----------");
  return {
    type: "upload_btn_click"
  };
};

export const handleDropzoneForUploadPost = file => {
  console.log("upload btn dropzone.....");
  return {
    type: "dropzone_uploadpost",
    payload: file
  };
};

export const handleUploadPostSubmit = event => async (dispatch, getState) => {
  event.preventDefault();
  let formdata = new FormData();
  formdata.append("postedBy", getState().user.id);
  formdata.append("title", getState().timeline.uploadPosts.title);
  formdata.append("category", getState().user.id);
  formdata.append("filedata", getState().timeline.uploadPosts.filedata);
  let response = await axios.post("http://localhost:8080/posts/uploadpost", formdata);
  console.log(response.data);
};

export const selectedCategory = event => {
  console.log("action of select tag.....");
  return {
    type: "select_type_upload_post",
    payload: event
  };
};
