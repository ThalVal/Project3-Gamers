const User = require('./User');
const Ending = require('./Ending');

Ending.hasMany(User, {
    foreignKey: 'ending_id',
    onDelete: 'CASCADE'
});