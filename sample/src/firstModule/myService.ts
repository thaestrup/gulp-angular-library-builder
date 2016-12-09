/// <reference path="../_All.d.ts" />

'use strict';

function myServiceFn() {

    function getTitle() {
        return "Hallo World";
    }

    return {
        getTitle: getTitle
    };
}

angular
    .module('firstModule')
    .factory('myService', myServiceFn);
