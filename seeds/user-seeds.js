const { User } = require('../models');

const userData = [
  {
    name: "luke",
    email: "lteal@email.com",
    password: "1234"
  },
  {
    name: "alex",
    email: "alex@email.com",
    password: "1234"
  },
  {
    name: "pat",
    email: "pat@email.com",
    password: "1234"
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
