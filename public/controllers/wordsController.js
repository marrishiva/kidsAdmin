/**
 * Created by Lorvenka003 on 11/2/2017.
 */
var app = angular.module("words",[]);

app.controller("WordsController",function($scope,CategoryFactory,SubCategoryFactory,PhonicFactory,WordsFactory){
    var vm = this;
    vm.words = {};
    $scope.addWords = function(){
       vm.words.phonicWord =  $scope.phonicLetter;
        WordsFactory.addWords(vm.words).then(function(result,error){
            if(error){
                console.log(error);
            }else{
                console.log(result);
                vm.words = {};
                window.location.reload();
            }

        });
    }


    $scope.phonicWord = function(letter){
        console.log(letter);
        if(letter){
            $scope.phonicLetter = ($scope.phonicLetter == undefined)?' '+letter:$scope.phonicLetter+letter;
            console.log(vm.phonicLetter);
        }
    }

    PhonicFactory.getPhonicsByCategory().then(function(result,error){
        if(error){
            console.log(error);
        }else{
            vm.phonicLists = result.data.data;

        }
    });

    CategoryFactory.getAll().then(function(result,error){
        if(error){
               console.log(error);
        }else{
            vm.categoriesList = result.data.data;
            console.log(vm.categoriesList);
        }
    });

    $scope.getSubList =function(categoryId){
        SubCategoryFactory.getSubList(categoryId).then(function(result,error){
            console.log(result);
            vm.subCategoryList = result.data.data;
        })
    }
    vm.dropDownRepeat = [];
    $scope.wordLength = function(word){
        for(var i=1;i<=word.length;i++){
            vm.dropDownRepeat.push(i);
        }
        $(document).ready(function() {
            $('select').material_select();

        });
    }

    $(document).ready(function() {
        $('select').material_select();

    });
    $scope.selectInit = function(){
        $(document).ready(function() {
            $('select').material_select();

        });
    }

});