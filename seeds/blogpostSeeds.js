const { BlogPost } = require('../models');

const BlogPostData = [
  {
    title: "Post 1",
    content: "content 1",
    user_id: "3",
  },
  {
    title: "Post 2",
    content: "content 2",
    user_id: "2",
  },
  {
    title: "Post 3",
    content: "content 3",
    user_id: "2",
  },
  {
    title: "Post 4",
    content: "content 4",
    user_id: "1",
  },
  {
    title: "Post 5",
    content: "content 5",
    user_id: "1",
  },

];

const seedBlogPost = () => BlogPost.bulkCreate(BlogPostData);

module.exports = seedBlogPost;