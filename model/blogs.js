const { required } = require("joi");
const mongoose = require("mongoose");

const blogModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },

  body: {
    type: String,
    required: true,
  },

  read_count: {
    type: Number,
    default: function () {
      if (this.body) {
        return this.body.split("").length;
      } else {
        return 0;
      }
    },
  },

  reading_time: {
    type: Number,
    default: function () {
      const wordPerMinute = 200;
      const wordLength = this.body.split(" ").length;
      const readingTime = wordLength / wordPerMinute;
      if (readingTime) {
        return readingTime;
      } else {
        return 0;
      }
    },
  },
});

const Blog = mongoose.model("blogs", blogModel);

module.exports = Blog;
