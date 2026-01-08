(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<div><h1>Welcome to Our Restaurant</h1><p>Browse our delicious menu items by category.</p><a ui-sref="categories" class="back-link">View Menu Categories</a></div>'
      })
      .state('categories', {
        url: '/categories',
        template: '<categories categories="categoriesCtrl.items"></categories>',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
          items: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{categoryShortName}',
        template: '<items items="itemsCtrl.items"></items>',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
  }
})();
