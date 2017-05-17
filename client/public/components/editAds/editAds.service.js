(function() {
  angular.module('app')
    .service('editAdsService', service)

  service.$inject = ['$http', '$q']

  function service($http, $q) {

    this.getAd = function(id) {
      return $http.get(`/api/classifieds/${id}`).then(success, failure)

      function success(response) {
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }

    this.editAd = function(id, ad) {
      return $http.patch(`/api/classifieds/${id}`, ad).then(success, failure)

      function success(response) {
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }

}



}())
