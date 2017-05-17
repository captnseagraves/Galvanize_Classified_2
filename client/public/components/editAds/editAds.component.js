(function(){
  'use strict'

  angular.module('app')
  .component('editAds', {
    controller: controller,
    templateUrl: './components/editAds/editAds.html'
  })

  controller.inject = ['editAdsService', '$stateParams', '$state']
  function controller(editAdsService, $stateParams, $state) {
    const vm = this

    vm.$onInit = function() {
        let id = $stateParams.id
        console.log(id);
            editAdsService.getAd(id)
              .then((result) => {
                vm.ad = result
              })
          }

    vm.editPost = function() {
        let id = $stateParams.id
        editAdsService.editAd(id, vm.ad).then(result => {
          $state.go('ads')
        })

    }


  }

}())
