/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var mongoose = require('mongoose');
var SubCategory = require('../models/subCategory');

module.exports = function(app,express) {
    var api = express.Router();
    api.post('/add', function (req, res) {
        console.log(req.body);

        var subCategories = new SubCategory({
            parent: mongoose.Types.ObjectId(req.body.parent),
            subCategoryName: req.body.name,
            description: req.body.description,

        });
        subCategories.save(function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.json({success: true, message: 'category added successfully'});
            }
        })
    });

    api.post('/getAll',function(req,res){

        console.log(req.body);

        SubCategory.find({parent:mongoose.Types.ObjectId(req.body.parent)},'_id subCategoryName',function(err,result){
            if(err){
                res.send(err);
            }else{
                res.json({success:true,data:result});
            }

        });


    });

    return api;
}
