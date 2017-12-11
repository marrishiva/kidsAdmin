/**
 * Created by Lorvenka003 on 10/25/2017.
 */
/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subCategorySchema = new Schema({
    parent:{type:Schema.Types.ObjectId,ref:'users'},
    subCategoryName:{type:String},
    description:{type:String},
    createdDate: { type: Date, default: Date.now },

});

module.exports = mongoose.model('subcategories',subCategorySchema);
