"use strict";

function myDirectiveFn(myService) {

    function controllerFn($scope) {

        $scope.title = myService.getTitle();
    }

    return {
        controller: controllerFn,
        templateUrl: "secondModule/templates/myTemplate.html"
    };
}

angular
    .module("secondModule")
    .directive("myDirective", myDirectiveFn);
