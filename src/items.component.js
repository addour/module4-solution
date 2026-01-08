(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            template: `
                <div>
                    <h2>Menu Items</h2>
                    <a ui-sref="categories" class="back-link">Back to Categories</a>
                    <div class="menu-item" ng-repeat="item in $ctrl.items">
                        <strong>{{item.name}}</strong><br>
                        {{item.description}}
                    </div>
                </div>
            `,
            bindings: {
                items: '<'
            }
        });
})();
