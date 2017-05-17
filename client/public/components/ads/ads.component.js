(function(){
  'use strict'

  angular.module('app')
  .component('ads', {
    controller: controller,
    templateUrl: './components/ads/ads.html'
  })

  controller.inject = ['adsService']
  function controller(adsService) {
    const vm = this

    vm.$onInit = function() {
            vm.adsList = []
            console.log(adsService);
            adsService.getAds()
              .then((result) => {
                vm.adsList = result
                vm.sortBy = '-created_at'
              })
          }

          vm.toggleNewPost = function toggleNewPost() {
          vm.showNewPost = vm.showNewPost ? !vm.showNewPost : true;
      }

      vm.addItem = function() {
        adsService.postAd(vm.ad)
        .then((result) => {
          vm.adsList.push(result)
        })
        delete vm.ad
      }

      vm.deleteAd = function(ad) {
        console.log('clicked');
        adsService.deleteAd(ad.id)
        .then(adsService.getAds()
        .then(result =>{
          console.log(result);
            vm.adsList = result
          })
        )
      }

  }

}())
