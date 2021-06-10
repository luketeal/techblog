const { Comment } = require('../models');

const commentData = [
  {
    content: "comment 1 on Post 1",
    user_id: "3",
    blog_id: "1"
  },
  {
    content: "comment 2 on Post 1",
    user_id: "2",
    blog_id: "1"
  },
  {
    content: "comment 3 on Post 2",
    user_id: "2",
    blog_id: "2"
  },
  {
    content: "comment 4 on Post 4",
    user_id: "1",
    blog_id: "4"
  },
  {
    content: "comment 5 on Post 4",
    user_id: "1",
    blog_id: "4"
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
