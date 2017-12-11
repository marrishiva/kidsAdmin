/**
 * Created by Lorvenka003 on 11/18/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordsSchema = new Schema({
    word:{type:String},
    mainCategory:{type:Schema.Types.ObjectId,ref:'phonems'},
    phonems:{type:Object},
    combinations:{type:Object},
    phonicWord:{type:String},
    description:{type:String},
    createdDate: { type: Date, default: Date.now },

});
module.exports = mongoose.model('words',wordsSchema);