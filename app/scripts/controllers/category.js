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
    $scope._category = category;
    $scope._products = products;
  });
