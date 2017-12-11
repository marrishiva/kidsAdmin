/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var app = angular.module("AddCategories",[]);

app.controller("AddCategoriesController",function($scope,CategoryFactory){
      var vm = this;
    $scope.categoriesData = function(){
        CategoryFactory.addCategory(vm.categories).then(function(result,error){
            if(error) {
                console.log(error);
            }else{
                console.log(result);
                vm.categories = {};
            }
        });

    }
});