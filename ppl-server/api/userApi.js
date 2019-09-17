const userSchema = require("../schema/userSchema");

module.exports = {
  saveUser: async userData => {
    try {
      let model = new userSchema({ ...userData, isVerified: false });
      let response = await model.save();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  authenticateUser: async data => {
    try {
      let response = await userSchema.find({
        $and: [{ email: data.email }, { password: data.password }, { isVerified: true }]
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  verifyUser: async params => {
    try {
      let response = await userSchema.findByIdAndUpdate(params, { isVerified: true });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  sendPassword: async params => {
    try {
      let response = await userSchema.find({ email: params });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
};
