/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phonemsSchema = new Schema({
            categoryIndex:{type:String},
            categoryName:{type:String},
            phonemCode:{type:String},
            description:{type:String},
            alias:{type:String},
            createdDate: { type: Date, default: Date.now },

    });

module.exports = mongoose.model('phonems',phonemsSchema);
