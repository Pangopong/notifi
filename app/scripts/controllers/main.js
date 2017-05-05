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

  });
