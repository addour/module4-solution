categories.component.js(function() {
'use strict';

angular.module('MenuApp')
.component('categories', {
    template: '<div><h2>Menu Categories</h2><a ui-sref="home" class="back-link">Back to Home</a><div class="category-item" ng-repeat="category in $ctrl.categories"><h3><a ui-sref="items({categoryShortName: category.short_name})">{{category.name}}</a></h3><p>{{category.special_instructions}}</p></div></div>',
    bindings: {
        categories: '<'
    }
});

})();
