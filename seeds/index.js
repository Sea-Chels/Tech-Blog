const seedUser = require("./userSeeds");
const seedPost = require("./postSeeds");
const seedComments = require("./commentsSeeds.js");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();
  await seedComments();
  process.exit(0);
};

seedAll();
