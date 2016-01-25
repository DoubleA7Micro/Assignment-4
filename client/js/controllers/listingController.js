angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = '';
    };

    $scope.deleteListing = function(listIndex) {
        var temp = $scope.listings.indexOf(listIndex);
        $scope.listings.splice(temp, 1);
        $scope.detailedInfo = undefined;
    };

    $scope.showDetails = function(listIndex) {
      $scope.detailedInfo = listIndex;
    };
  }
]);