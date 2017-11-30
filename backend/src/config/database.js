const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //garantindo que a api promise do mongoose vai usar a do node

module.exports = mongoose.createConnection('mongodb://localhost/todo');