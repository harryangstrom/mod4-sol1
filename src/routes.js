(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/MenuApp/templates/home.template.html'
      })
    
      // Premade list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/MenuApp/templates/categories.template.html',
        controller: 'categoriesController',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
          //   var promise = MenuDataService.getAllCategories();
          //   console.log(promise);
          //   promise.then( function (e) {
          //     console.log("vuelta de la promise");
          //     console.log(e);
          //     console.log(e.data);
          //     return e;
          //   })
          //   .catch(function(error) {
          //     console.log("Error getMatchedMenuItems");
          // });
          
            return MenuDataService.getAllCategories();
           }]
        }
      })
    
      // Item detail
      .state('items', {
        url: '/items',
        templateUrl: 'src/MenuApp/templates/items.template.html'
        // url: '/item-detail/{itemId}',
        // templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
        // controller: 'ItemDetailController as itemDetail',
        // params: {
        //   itemId: null
        // }
      });
    
    }

    categoriesController.$inject = ['categories'];
    function categoriesController(categories) {

      var cont = this;
      cont.data = categories.data;
      console.log(categories.data);
    };
    
    })();
    