const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    //I JUST COPIED THIS NGL NOT SURE I UNDERSTAND IT ALL 
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const blog of blogData) {
      await Project.create({
        ...blog,
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();