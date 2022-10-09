const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

//GET: get one blog post by id--- /blog/:id
//GET: get all blog posts --- /blog



router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;
