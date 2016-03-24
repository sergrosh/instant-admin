'use strict';

angular.module('itemadminclientApp')
  .controller('VenueListCtrl', ['$scope', '$http', 'ENV',
    function ($scope, $http, ENV) {

      $scope.venues = [];
      $scope.venueTotalCount = 0;

      $scope.load = function (currentPage, pageItems) {
        $http({
          method: 'GET',
          url: ENV.apiEndpoint + 'venues/?limit=' + pageItems + '&offset=' + currentPage
        }).success(function (data) {
          $scope.venues = data.data;
          $scope.venueTotalCount = data.total;

        }).error(function (data) {
          console.log(data);
          alert('Unable to load');
        });

      };

      $scope.onServerSideItemsRequested = function (currentPage,
                                                    pageItems,
                                                    filterBy,
                                                    filterByFields,
                                                    orderBy,
                                                    orderByReverse) {

        $http({
          method: 'GET',
          url: ENV.apiEndpoint + 'venue/?limit=' + pageItems + '&offset=' + currentPage
        }).success(function (data) {
          $scope.venues = data.data;
          $scope.venueTotalCount = data.total;
        }).error(function (data) {
          console.log(data);
          alert('Unable to load');
        });


      }


      $scope.columNameList = [
        'id',
        'user',
        'name',
        'country',
        'city'
      ];
      $scope.columnNameSelectedList = ['id', "name", "country"];

      $scope.removeVenue = function removeVenue(id, index) {

        var isConfirmed = confirm('Are you sure, that you want to remove this venue?');
        if (isConfirmed) {
          $http({
            method: 'DELETE',
            url: ENV.apiEndpoint + 'venues/' + id
          }).success(function (data) {
            $scope.venues.splice(index, 1);
          }).error(function (data) {
            console.log(data);
            alert('Unable to delete');
          });
        } else {
          return false;
        }

      }


    }]);
