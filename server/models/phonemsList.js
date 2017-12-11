/**
 * Created by Lorvenka003 on 11/18/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phonemsList = new Schema({
    mainCategory:{type:Schema.Types.ObjectId,ref:'phonems'},
    phonem:{type:String},
    combinations:{type:Array},
    createdDate: { type: Date, default: Date.now },

});
module.exports = mongoose.model('phonemsList',phonemsList);