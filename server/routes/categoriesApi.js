/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var mongoose = require('mongoose');
var Phonems = require('../models/phonems');

module.exports = function(app,express){
    var api = express.Router();

    api.post('/add',function(req,res){
        console.log(req.body);
        var categories  = new Phonems({
            categoryIndex:req.body.index,
            categoryName:req.body.name,
            phonemCode:req.body.phonem,
            description:req.body.description,
            alias:req.body.alias
        });
        categories.save(function(err,result){
            if(err){
                console.log(err);
                res.send(err);
            }else{
                res.json({success:true,message:'category added successfully'});
            }
        })
    });

    api.get('/getAll',function(req,res){

        Phonems.find({},'_id categoryName',function(err,result){
            if(err){
                res.send(err);
              }else{
                res.json({success:true,data:result});
            }

        });


    });

    return api;
}