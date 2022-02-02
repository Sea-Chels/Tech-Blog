const { Post } = require("../models");

const postSeed = [
  {
    title: "How to start a tech blog 101",
    content:
      "Step 1: become a genius. Step 2: if you're not a genius, then hire one. Step 3: let the genius do all the work.",
    user_id: 1,
  },
  {
    title: "Robot AI's",
    content: "Like IRobot, only they won't take ove this time!",
    user_id: 2,
  },
  {
    title: "Technology at it's finest! ",
    content: "Where will we be in the next 50 years? Some of us will be dead! Statistically speaking people will die in the next 50 years. Science. Boom.",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postSeed);

module.exports = seedPost;
