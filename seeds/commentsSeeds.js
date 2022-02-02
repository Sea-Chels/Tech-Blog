const { Comment } = require("../models");

const comments = [
  {
    comment_text: "this is fabulous my dear!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Wow! what a techy thing to do!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text:
      "I'm really getting the hang of this ~typing~ thing! ",
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;
