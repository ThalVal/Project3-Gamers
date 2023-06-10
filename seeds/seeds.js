const sequelize = require("../config/connection");
const Ending = require('../models/Ending');
const User = require('../models/User');

const userSeedData = require('./userSeedData.json');
const endingSeedData = require('./endingSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await Ending.bulkCreate(endingSeedData);
    await User.bulkCreate(userSeedData);
    process.exit(0);
};

seedDatabase();