'use strict';

/**
 * @ngdoc function
 * @name petstoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the petstoreApp
 */
angular.module('petstoreApp')
  .controller('MainCtrl', function ($scope, moltin) {
    var featured = moltin.Category.List({slug: 'featured'})[0].id; // sketchy workaround for .Search
    $scope.featuredProducts = moltin.Product.Search({category: featured});
    console.log($scope.featuredProducts);
  });
