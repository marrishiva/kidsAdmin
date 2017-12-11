/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = new express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/index.html');
});
var categoryApi = require('./server/routes/categoriesApi')(app,express);
app.use('/category',categoryApi);

var subCategoryApi = require('./server/routes/subCategoriesApi')(app,express);
app.use('/subCategory',subCategoryApi);

var phonemsApi = require('./server/routes/phonemsApi')(app,express);
app.use('/phonems',phonemsApi);

var wordsApi = require('./server/routes/wordsApi')(app,express);
app.use('/words',wordsApi);

mongoose.connect('mongodb://localhost/kidsAdmin',function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log('database connected');
    }
});

app.listen(3010,function(err,result){
    if(err){
        console.log('not connceted');
    } else{
        console.log('server listening at 3010 ');
    }
});