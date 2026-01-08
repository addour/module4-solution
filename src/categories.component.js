(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            template: '<div><h2>Menu Categories</h2><a ui-sref="home" class="back-link">Back to Home</a><div class="category-item" ng-repeat="category in $ctrl.categories"><a ui-sref="items({categoryShortName: category.short_name})">{{category.name}}</a></div></div>',
            bindings: {
                categories: '<'
            }
        });
})();
