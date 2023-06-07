const sequelize = require("../config/connection");
const { Ending } = require('../models/Ending');
const { User } = require('../models/User');

const userSeedData = require('./userSeedData.json');
const endingSeedData = require('./endingSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeedData);

    await Ending.bulkCreate(endingSeedData);

    process.exit(0);
};

seedDatabase();