
const Event = require('./Event');
const Item = require('./Item');
const Map = require('./Map');
const Room = require('./Room');
const SaveData = require('./SaveData');
const StartLocation = require('./StartLocation');
const User = require('./User');
const Ending = require('./Ending');


User.hasMany(Ending, {
    model: 'ending',
    key: 'id',
});