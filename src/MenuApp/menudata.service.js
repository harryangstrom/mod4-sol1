(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$q']
    function MenuDataService($q) {

        var service = this;

        service.getAllCategories = function () {
            //returns a promise which is a result of using the $http service

        };

        service.getItemsForCategory = function (categoryShortName) {
            //returns a promise which is a result of using the $http service

        };




    }
    
    })();