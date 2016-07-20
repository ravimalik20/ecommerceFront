angular.module('productCollections').
    component('productCollections', {
        templateUrl: 'views/home/components/product-collections.template.html',
        controller: ['$http',
            function ProductCollectionController($http) {
                var self = this;

                $http({
                    method : 'GET',
                    url : api('/collection'),
                    headers : {
                        'Authorization' : 'Bearer gntfhheJulTWKYwS5ISUBTQNVNo7Rn8IXhwOYjjCndCAACqZcc02dx0JTJae'
                    }
                }).then(function (response) {
                    self.collections = response.data.data;
                });
            }
        ]
    }); 
