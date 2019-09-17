export default (state, action) => {
  switch (action.type) {
    case "form_change":
      console.log(state);
      const value = action.payload.type === "checkbox" ? action.payload.checked : action.payload.value;
      return {
        ...state,
        update_user: {
          ...state.update_user,
          register: { ...state.update_user.register, [action.payload.name]: value }
        }
      };
    case "login_form_change":
      const val = action.payload.type === "checkbox" ? action.payload.checked : action.payload.value;
      console.log(action.payload);
      return {
        ...state,
        update_user: {
          ...state.update_user,
          login: { ...state.update_user.login, [action.payload.name]: val }
        }
      };

    case "register_response":
      return {
        ...state,
        update_user: {
          ...state.update_user,
          register: { ...state.update_user.register, alreadyExist: action.payload.error, clicked: true }
        }
      };
    case "login_response":
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
      console.log(state.update_user);
      if (action.payload.authenticate && state.update_user.login.checked) {
        localStorage.setItem("email", state.update_user.login.email);
        localStorage.setItem("password", state.update_user.login.password);
        localStorage.setItem("checked", state.update_user.login.checked);
      }
      return {
        ...state,
        update_user: {
          ...state.update_user,
          login: {
            ...state.update_user.login,
            redirect: action.payload.authenticate,
            auth: action.payload.authenticate,
            clicked: true
          }
        }
      };
    case "rememberme":
      return {
        ...state,
        update_user: {
          ...state.update_user,
          login: {
            ...state.update_user.login,
            email: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
            checked: localStorage.getItem("checked")
          }
        }
      };
    case "token_status":
      console.log("action", action.payload);
      if (action.payload) {
        return {
          ...state,
          user: {
            ...state.user,
            id: action.payload.user._id,
            username: action.payload.user.username,
            firstname: action.payload.user.firstname,
            lastname: action.payload.user.lastname
          },
          isLogin: true,
          isLoading: false
        };
      }

    case "loading":
      return { ...state, isLoading: true };

    case "forgot_form_change":
      console.log(state);
      return {
        ...state,
        update_user: {
          ...state.update_user,
          forgotpassword: {
            ...state.update_user.forgotpassword,
            [action.payload.target.name]: action.payload.target.value
          }
        }
      };
    case "forgot_pass_submit":
      return {
        ...state,
        update_user: {
          ...state.update_user,
          forgotpassword: {
            ...state.update_user.forgotpassword,
            mailSent: action.payload.done
          }
        }
      };
    case "add_category_options":
      console.log("working");
      return {
        ...state,
        addCategories: {
          ...state.addCategories,
          isActive: !state.addCategories.isActive
        }
      };
    case "add_category_input_change":
      return {
        ...state,
        addCategories: {
          ...state.addCategories,
          [action.payload.target.name]: action.payload.target.value
        }
      };
    case "response_of_add_category":
      return {
        ...state,
        addCategories: {
          ...state.addCategories,
          category: action.payload
        }
      };
      break;
    case "on_drop":
      console.log("on drop file...", action.payload);
      return {
        ...state,
        addCategories: {
          ...state.addCategories,
          filedata: action.payload
        }
      };
    case "initial_fetch_category":
      return {
        ...state,
        addCategories: {
          ...state.addCategories,
          category: action.payload.data
        }
      };
    case "upload_btn_click":
      console.log("isBtnActive..........");
      return {
        ...state,
        timeline: {
          ...state.timeline,
          uploadPosts: {
            ...state.timeline.uploadPosts,
            isBtnActive: !state.timeline.uploadPosts.isBtnActive
          }
        }
      };
    case "dropzone_uploadpost":
      return {
        ...state,
        timeline: {
          ...state.timeline,
          uploadPosts: {
            ...state.timeline.uploadPosts,
            filedata: action.payload
          }
        }
      };
    case "select_type_upload_post":
      console.log("selected Tag reducer---->", action.payload);
      return {
        ...state,
        timeline: {
          ...state.timeline,
          uploadPosts: {
            ...state.timeline.uploadPosts,
            category: action.payload.target.value
          }
        }
      };
  }
  return state;
};
