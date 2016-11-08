angular.module('petstoreApp.moltin', [])
  .factory('MoltinAuth', function ($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: '78nR0dTHjPp9z2xACFkUMIWt61vmMdWcNKNXn22Gqe'});
    moltin.Authenticate(function() {
      deferred.resolve(moltin);
    });

    return deferred.promise;
  })
