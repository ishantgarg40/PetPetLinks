export const initialState = {
  user: null,
  isLoading: true,
  update_user: {
    login: {
      email: "",
      password: "",
      checked: false,
      redirect: false,
      auth: false,
      clicked: false
    },
    register: {
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "",
      redirect: false,
      alreadyExist: false,
      clicked: false
    },
    forgotpassword: {
      email: "",
      mailSent: false
    }
  },
  timeline: {
    uploadPosts: {
      title: "",
      category: "",
      fileData: null,
      isBtnActive: false
    }
  },
  addCategories: {
    isActive: false,
    filedata: null,
    title: "",
    category: []
  }
};
