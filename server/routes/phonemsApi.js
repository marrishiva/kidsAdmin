/**
 * Created by Lorvenka003 on 11/18/2017.
 */
var mongoose = require('mongoose');
var Phonems = require('../models/phonemsList');

module.exports = function(app,express) {
    var api = express.Router();
    api.post('/add',function(req,res){
       console.log(req.body);
        var phonems = new Phonems({
            mainCategory: mongoose.Types.ObjectId(req.body.category),
            phonem:req.body.code,
            combinations:req.body.combinations
        });
        phonems.save(function(err,result){
            if(err){
                console.log(err);
                res.json({success:false,message:'something went wrong',data:err});
            }else{
                res.json({success:true,message:'data Successfully inserted'});
            }
        });
    });

    api.get('/getAll',function(req,res){

        Phonems.find({},function(err,result){
            if(err){
                res.send(err);
            }else{
                res.json({success:true,data:result});
            }

        });


    });
    return api;
}