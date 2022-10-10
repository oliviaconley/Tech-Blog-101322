const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');


//get all blog posts
router.get('/', withAuth, async (req, res) => {
    try {
const blogData = await Blog.findAll({
    include: [ //DOUBLE CHECK ON THIS 
        {
            attributes: ['title', 'description', 'user_id'],
        }
    ]
});
 // Serialize data so the template can read it
 //.map loops through grabbing specific info????
 const blogs = blogData.map((blog) => blog.get({ plain: true })); 

 //we are sending the logged in state to the front end, registering a handlebards view ( NEED TO MAKE SURE I HAVE SOMETHING ON THE FRONT END TO ACCOUNT FOR THIS)
 res.render('homepage', {
    blogs,
    logged_in: req.session.logged_in,
  });
    } catch (err) {
    res.status(500).json(err);
    }
});


//get a single blog post by id
router.get('/:id', async (req, res) => {
    try {
      const blogPostData = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['user'],
          },
        ],
      });
  
      const blog = blogPostData.get({ plain: true });
  
      res.render('blog', {
        ...blog,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//this is getting what exactly? 
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect them to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  //ALSO NEED TO ACCOUNT FOR THIS IN THE FRONT END ??
    res.render('login');
  });

  module.exports = router;
