const { Post } = require("../models");

const postdata = [
  {
    postTitle: "Why You Should Learn To Code",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    userId: 1,
  },
  {
    postTitle: "The Importance of Agile Development",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    userId: 2,
  },
  {
    postTitle: "10 Reasons Why You Need to Optimize Your Site",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    userId: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
