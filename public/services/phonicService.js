/**
 * Created by Lorvenka003 on 11/18/2017.
 */
var app = angular.module('phonicsService',[]);

app.factory('PhonicFactory',['$http',function($http){
    var factory = {};
    factory.addPhonem = function(data){
        console.log(data);
        return $http.post('http://localhost:3010/phonems/add',data);
    }
    factory.getPhonicsByCategory= function(){
        return $http.get('http://localhost:3010/phonems/getAll');
    }
    return factory;

}])
