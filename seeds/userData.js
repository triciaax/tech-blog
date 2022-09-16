const { User } = require("../models");

const userdata = [
  {
    username: "Tom",
    password: "password123",
  },
  {
    username: "Nancy",
    password: "password123",
  },
  {
    username: "Lulu",
    password: "password123",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
