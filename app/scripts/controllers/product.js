'use strict';

/**
 * @ngdoc function
 * @name petstoreApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the petstoreApp
 */
angular.module('petstoreApp')
  .controller('ProductCtrl', function($scope, product, moltin, $timeout) {
    $scope._product = product;
    $scope.addStatus = null;

    $scope.addCart = function() {
      $scope.addStatus = 'Adding to cart';
      /**
       * @ngdoc function
       * @name moltin.Cart.Insert
       * @description Add a product to the cart.
       * @param product.id, amount, null, function
       * # MoltinAuth
       * Moltin API
       */
      moltin.Cart.Insert(product.id, 1, null, function () {
        $scope.addStatus = 'Success!';
        $scope.$apply();
        $timeout(function() {
          $scope.addStatus = null;
        }, 1000);
      });
    }
  });
