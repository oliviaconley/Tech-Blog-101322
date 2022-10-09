const router = require('express').Router();
const { User } = require('../../models'); 

//create new user
router.post('/', async (req, res) => {
    try {
        //creating user from the request body 
      const userData = await User.create(req.body);
        //saving the session 
        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

//create login session 
router.post('/login', async (req, res) => {
 //finding one user based on the username that is sent ot us in the request body 
try { const userData = await User.findOne({ where: { user: req.body.user } });

 if (!userData) {
    res
      .status(400)
      .json({ message: 'Incorrect username or password, please try again' });
    return;
  }
//checking that pw is correct 
  const validPassword = await userData.checkPassword(req.body.password);

  if (!validPassword) {
    res
      .status(400)
      .json({ message: 'Incorrect username or password, please try again' });
    return;
  }
//saving the session, making sure that the user is loggedin and adding the userID so we know which user is interacting with the system. 
    req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    res.json({ user: userData, message: 'You are now logged in!' });
});

} catch(err) {
    res.status(400).json(err);
}
}); 

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
//we are destroying the session, the session will also be removed from the database
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;