const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema"
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categorySchema"
  },
  comments: [
    {
      text: String,
      date: {
        type: Date,
        default: Date.now
      },
      postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema"
      }
    }
  ],
  postedOn: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: [String],
    default: []
  },
  fileData: Object,
  featured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("postModel", postSchema);
