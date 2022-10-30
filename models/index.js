const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//Blog belongsTo User
Blog.belongsTo(User, {
  foreignKey: 'user_id',
    onDelete: 'cascade' 
}); 

//User hasMany blogs
User.hasMany(Blog, {
  foreignKey: 'user_id'
  }); 

//Comment belongsTo user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
    onDelete: 'cascade' 
}); 

//User hasMany comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
}); 

//Comment belongsTo Blog 
Comment.belongsTo(Blog, {
  foreignKey: 'post_id',
  onDelete: 'cascade'
}); 

//Blog hasMany comments
Blog.hasMany(Comment, {
  foreignKey: 'post_id'
}); 

module.exports = { User, Blog, Comment };