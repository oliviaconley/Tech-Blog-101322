const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

//POST: create new post -- /blog
router.post('/', withAuth, async (req, res) => {
try {
    const newBlogPost = await Blog.create({
        //WHAT DOES THIS MEAN???
        ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlogPost);
} catch (err) {
    res.status(400).json(err);
}

});

//DELETE: delete blog post /blog/:id
router.delete('/:id', withAuth, async (req, res) => {
try {
const blogPost = await Blog.destroy({
    where: {
        id: req.params.id,
        user_id: req.session.user_id,
    }
});
if (!blogPost) {
    res.status(404).json({ message: 'No blog post found with this id' });
    return;
  }
} catch(err) {
    res.status(500).json(err);
}
}); 

module.exports = router; 