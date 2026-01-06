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
        template: '<div><h2>Welcome to Our Restaurant</h2><p>Browse our delicious menu items by category.</p><a ui-sref="categories" class="back-link">View Menu Categories</a></div>'
    })
    .state('categories', {
        url: '/categories',
        template: '<categories categories="$resolve.categories"></categories>',
        resolve: {
            categories: ['MenuDataService', function(MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })
    .state('items', {
        url: '/items/{categoryShortName}',
        template: '<items items="$resolve.items"></items>',
        resolve: {
            items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
    });
}

})();
