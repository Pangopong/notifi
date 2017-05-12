'use strict';

/**
 * @ngdoc function
 * @name notifiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notifiApp
 */

    var rm = function(){
        angular.element("body").scope().getEvents();
    }

angular.module('notifiApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {

    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  	
  	$scope.appoints = [];

  	$scope.getEvents = function(){
        $http({
            method: 'GET',
            url: 'http://139.59.136.223:3000' //139.59.136.223
        }).then(function successCallback(response) {

            $scope.appoints = response.data;
            console.log($scope.appoints);
            

        }, function errorCallback(response) {

            console.log(response);
        });
    }

    /*
    $scope.mod = function(toDel){
    	var req = {
    		method: 'POST',
    		url: 'http://localhost:3000/?del=1',
    		data: toDel
    	}
    	console.log(req.data);
        $http(req).then(function(){console.log('Blanao'); $scope.getEvents();}, function(){console.log('NO POST')});
    }*/

    $scope.getEvents();
    setInterval(function(){

    	console.log("GET:");

    	$scope.getEvents();

    }, 60000);



  });
