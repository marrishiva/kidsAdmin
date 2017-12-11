/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var app = angular.module('subCategoriesService',[]);

app.factory('SubCategoryFactory',['$http',function($http){
    var factory = {};

    factory.addSubCategory = function(data){
        console.log(data);
        return $http.post('http://localhost:3010/subCategory/add',data);
    }

    factory.getSubList = function(parentId){

        return $http.post('http://localhost:3010/subCategory/getAll',{parent:parentId});
    }
    return factory;

}])
