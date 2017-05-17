(function(){
  'use strict'

  angular.module('app')
  .component('editAds', {
    controller: controller,
    templateUrl: './components/ads/editAds.html'
  })

  controller.inject = ['editAdsService']
  function controller(editAdsService) {
    const vm = this

    vm.$onInit = function() {
        let id = $stateParams.id
            editAdsService.getAd(id)
              .then((result) => {
                vm.ad = result
              })
          }

    vm.editPost = function() {
        let id = $stateParams.id
        editService.editPost(id, vm.post).then(result => {
          $state.go('post')
        })

    }


  }

}())
