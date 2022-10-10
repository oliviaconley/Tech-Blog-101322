//exporting the User, Blog Post & Comment
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.belongsTo(User, {
    foreignKey: 'user_id'
  });

//DEFINE RELATIONSHIP HERE BETWEEN COMMENT, USER & BLOG 

module.exports = { User, Blog, Comment };