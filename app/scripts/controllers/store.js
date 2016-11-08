'use strict';

/**
 * @ngdoc function
 * @name petstoreApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the petstoreApp
 */
angular.module('petstoreApp')
  .controller('StoreCtrl', function (categories) {
    this.categories = categories;
    console.log(categories);
  });
