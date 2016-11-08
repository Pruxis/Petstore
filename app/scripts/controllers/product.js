'use strict';

/**
 * @ngdoc function
 * @name petstoreApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the petstoreApp
 */
angular.module('petstoreApp')
  .controller('ProductCtrl', function ($scope, product) {
    $scope._product = product;
  });
