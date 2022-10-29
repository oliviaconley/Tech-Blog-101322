const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//Blog belongs to User
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade' //figure this out Olivia 
  });

//User hasMany blogs
User.hasMany(Blog, {
  foreignKey: 'user_id'
  }); 

//Comment belongs to user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
    onDelete: 'cascade' 
}); 

//User hasMany coments
User.hasMany(Comment, {
  foreignKey: 'user_id'
}); 

//Comment belongs to Blog 
Comment.belongsTo(Blog, {
  foreignKey: 'post_id',
  onDelete: 'cascade'
}); 

//Blog has many comments
Blog.hasMany(Comment, {
  foreignKey: 'post_id'
}); 

module.exports = { User, Blog, Comment };