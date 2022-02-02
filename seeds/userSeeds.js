const { User } = require("../models");

const userSeed = [
  {
    username: "brett onison",
    password: "bonison",
  },
  {
    username: "leviathan",
    password: "heyitslevi",
  },
  {
    username: "jack",
    password: "inTheBeanstalk",
  },
];

const seedUser = () => User.bulkCreate(userSeed);

module.exports = seedUser;
