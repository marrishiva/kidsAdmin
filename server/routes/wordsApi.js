/**
 * Created by Lorvenka003 on 11/18/2017.
 */
var mongoose = require('mongoose');
var Words = require('../models/words');

module.exports = function(app,express) {
    var api = express.Router();
    api.post('/add', function (req, res) {
        console.log(req.body);

        var words = new Words({
            word:req.body.name,
            mainCategory: mongoose.Types.ObjectId(req.body.parent),
            phonems: req.body.sub,
            combinations: req.body.combination,
            phonicWord:req.body.phonicWord,
            description:req.body.description,
        });
        words.save(function (err, result) {
            if (err) {
                console.log(err);
                res.json({success: false, message: 'something went wrong', data: err});
            } else {
                res.json({success: true, message: 'data Successfully inserted'});
            }
        });
    });
    return api;
}
