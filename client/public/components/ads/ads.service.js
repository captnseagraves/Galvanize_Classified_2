(function() {
  angular.module('app')
    .service('adsService', service)

  service.$inject = ['$http', '$q']

  function service($http, $q) {

    this.getAds = function() {
      console.log('here');
      return $http.get('/api/classifieds').then(success, failure)

      function success(response) {
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }

    this.postAd = function(newAd) {
      return $http.post('/api/classifieds', newAd).then(success, failure)

      function success(response) {
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }

    this.deleteAd = function(id) {
      return $http.delete(`/api/classifieds/${id}`).then(success, failure)

      function success(response) {
        console.log('success');
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }


}



}())
