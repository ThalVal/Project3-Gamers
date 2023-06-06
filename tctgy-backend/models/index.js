const Event = require('./Event');
const Item = require('./Item');
const Map = require('./Map');
const User = require('./User');
const Room = require('./Room')


Game.hasMany(Room, {
    foreignKey: 'room_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Event,
    Item,
    Map
    
}
// User.hasMany(Item, )