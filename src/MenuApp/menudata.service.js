(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {

        var service = this;

        service.getAllCategories = function () {
            //returns a promise which is a result of using the $http service
            console.log ("ejecutando getallcategories ", ApiBasePath + "/categories.json");
            var response = $http({
                method: "GET",
                url: [ApiBasePath + "/categories.json"]
                //cache: true
            });
            console.log(response);
            return response;
        };

        service.getItemsForCategory = function (categoryShortName) {
            //returns a promise which is a result of using the $http service
            var response = $http({
                method: "GET",
                url: [ApiBasePath + "/menu_items.json"],
                params: {
                    category: categoryShortName
                }
            });
            return response;
        };




    }
    
    })();