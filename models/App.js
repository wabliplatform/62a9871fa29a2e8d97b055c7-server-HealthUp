
const { AppAppImageSchema } =require('./AppAppImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appSchema = new Schema({
Underscoreid:String , 


appTitle:String , 


appDescription:String , 


appImage:  
AppAppImageSchema
 



})

module.exports = {
  App : mongoose.model('app', appSchema),
}

