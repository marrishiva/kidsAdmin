/**
 * Created by Lorvenka003 on 11/18/2017.
 */
var app = angular.module("phonics",[]);
app.controller('PhonicsController',function($scope,CategoryFactory,SubCategoryFactory,PhonicFactory){
    var vm = this;
    vm.phonics = {};
    vm.phonics.combinations = [];

    $scope.addPhonics = function(){
        PhonicFactory.addPhonem(vm.phonics).then(function(result,error){
            if(result){
                console.log(result);
                vm.phonics = {};
            }else{
                console.log(error);
            }
        });
    }
    CategoryFactory.getAll().then(function(result,error){
        if(error){
            console.log(error);
        }else{
            vm.categoriesList = result.data.data;
            console.log(vm.categoriesList);
        }
    });
    vm.addCombination = function(combo){
        vm.phonics.combinations.push({combination:combo});
    }
    vm.removeCombination = function(combination){
        for(var i =0;i<vm.phonics.combinations.length;i++){
            if(vm.phonics.combinations[i].combination == combination){
                vm.phonics.combinations.splice(i,1);
                break;
            }
        }
    }
    $(document).ready(function() {
        $('select').material_select();

    });
});
