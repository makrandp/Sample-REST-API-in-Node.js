var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    emailID: String,
    name: String
});

var User = mongoose.model('users', UserSchema);
module.exports = User;
