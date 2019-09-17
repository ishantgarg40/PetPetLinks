const categoryModel = require("../schema/categorySchema");

module.exports = {
  saveCategory: async category => {
    try {
      let categoryData = new categoryModel({ ...category });
      let response = await categoryData.save();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  fetchCategory: async () => {
    try {
      let response = await categoryModel.find({});
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
};
