/**
 * Created by Lorvenka003 on 11/2/2017.
 */
/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var app = angular.module('wordsService',[]);

app.factory('WordsFactory',['$http',function($http){
    var factory = {};

    factory.addWords = function(data){
        console.log(data);
        return $http.post('http://localhost:3010/words/add',data);
    }

  /*  factory.getAll = function(){

        return $http.get('http://localhost:3010/category/getAll');
    }*/

    return factory;

}])


