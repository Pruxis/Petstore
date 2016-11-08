'use strict';

/**
 * @ngdoc function
 * @name petstoreApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the petstoreApp
 */
angular.module('petstoreApp')
  .controller('CategoryCtrl', function($scope, category, products) {
    $scope.cat = category;
    $scope.products = products;
  });
