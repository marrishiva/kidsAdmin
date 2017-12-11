/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var app = angular.module('categoriesService',[]);

app.factory('CategoryFactory',['$http',function($http){
    var factory = {};

    factory.addCategory = function(data){
        console.log(data);
        return $http.post('http://localhost:3010/category/add',data);
    }

    factory.getAll = function(){

        return $http.get('http://localhost:3010/category/getAll');
    }

    return factory;

}])


