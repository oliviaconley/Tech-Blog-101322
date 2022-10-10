const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

//create new post 
router.post('/', withAuth, async (req, res) => {
try {
    const newBlogPost = await Blog.create({
        ...req.body, //... = spread, it's destructuring the object
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlogPost);
} catch(err) {
    res.status(400).json(err);
}

});

//update blog post 
router.put('/', withAuth, async (req,res) => {
try { 
   

} catch(err) {
    res.status(400).json(err);
}
});

//delete blog post
router.delete('/:id', withAuth, async (req, res) => {
try {
const blogPost = await Blog.destroy({
    where: {
        id: req.params.id,
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