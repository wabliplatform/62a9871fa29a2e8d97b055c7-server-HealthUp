
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AppAppImageSchema = new Schema({
data:String , 
name:String 
});

module.exports = { AppAppImageSchema };

