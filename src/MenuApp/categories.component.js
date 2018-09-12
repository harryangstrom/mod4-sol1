(function () {
    'use strict';
    
    angular.module('data')
    .component('categories', {
      templateUrl: 'src/MenuApp/templates/categories.template.html',
      controller: 'categoriesController as catCont',
      bindings: {
        categories: '<'
      }
    });

    categoriesController.$inject = ['categories'];
    function categoriesController(categories) {

      var cont = this;
      cont.data = categories.data;
      console.log(categories.data);
    };
    
    })();