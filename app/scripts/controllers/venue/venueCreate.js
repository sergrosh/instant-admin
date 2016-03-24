'use strict';

angular.module('itemadminclientApp')
  .controller('VenueCreateCtrl', ['$scope', '$http', 'ENV',
    function ($scope, $http, ENV) {

      $scope.createVenue = function createVenue(venue) {

        $http({
          method: 'POST',
          url: ENV.apiEndpoint + 'venues/',
          data: venue
        }).success(function (data) {
          $scope.venue = null;
          //$location.path('/venueCreate');
          alert('Added new venue with id ' + data.id);
        }).error(function (data) {
          //console.log(data);
          //alert('Unable to create ' + data);
        });

      }
    }]);
