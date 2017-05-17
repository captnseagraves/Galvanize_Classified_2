(function() {
    'use strict';

    angular.module('app').config(config)


    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true)

        $stateProvider
            .state({
                name: 'ads',
                url: '/',
                component: 'ads',
            })
            .state({
                name: 'editAd',
                url: '/ads/:id/edit',
                component: 'editAds',
            })
    }

}());
