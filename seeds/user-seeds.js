const { User } = require('../models');
const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

const userData = [
  {
    name: "luke",
    email: "lteal@email.com",
    password: "12341234"
  },
  {
    name: "alex",
    email: "alex@email.com",
    password: "12341234"
  },
  {
    name: "pat",
    email: "pat@email.com",
    password: "12341234"
  },

];


async function pwHash(userArray) {
  for (const user of userArray) {
    user.password = await bcrypt.hash(user.password, 10)
  }
}

pwHash(userData)

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
