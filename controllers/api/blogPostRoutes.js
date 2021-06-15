const router = require('express').Router();
const { Comment, BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const newBlogPost = await BlogPost.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const udpateBlogPost = await BlogPost.update({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.body.id,
      },
    }
    );
    
    res.status(200).json(udpateBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/:id', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.comment,
      user_id: req.session.user_id,
      blog_id: req.params.id,
    });


    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
