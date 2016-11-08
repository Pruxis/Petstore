'use strict';

/**
 * @ngdoc function
 * @name petstoreApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the petstoreApp
 */
angular.module('petstoreApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
    console.log(categories);
  });
