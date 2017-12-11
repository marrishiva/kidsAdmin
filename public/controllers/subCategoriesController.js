/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var app = angular.module('subCategory',[]);
app.controller('SubCategoriesController',function($scope,CategoryFactory,SubCategoryFactory){
    var vm = this;



    $scope.subCategoriesData = function(){
          console.log(vm.subCategory);
        SubCategoryFactory.addSubCategory(vm.subCategory).then(function(result,error){
            if(error){
                console.log(error);
            }else{
                console.log(result);
                vm.subCategory = {};
            }
        })
    };


    $scope.getCategoriesData = function(){
        CategoryFactory.getAll().then(function(result,error){

            if(error){
                console.log(error);
            }else{
               vm.categoriesList = result.data.data;
            }
        })
    }

    $scope.getCategoriesData();

    $(document).ready(function() {
        $('select').material_select();

    });
});