const router = require('express').Router();

const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');

// Prefix all routes defined in `userRoutes.js` with `/user
// Prefix all routes defined in `blogRoutes.js` with `/blog
// Prefix all routes defined in `commentRoutes.js` with `/comment
router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;