(function() {
'use strict';

angular.module('MenuApp')
.component('items', {
    template: '<div><h2>Menu Items</h2><a ui-sref="categories" class="back-link">Back to Categories</a><div class="menu-item" ng-repeat="item in $ctrl.items.menu_items"><h3>{{item.name}}</h3><p><strong>Short Name:</strong> {{item.short_name}}</p><p>{{item.description}}</p></div></div>',
    bindings: {
        items: '<'
    }
});

})();
