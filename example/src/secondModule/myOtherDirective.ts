/// <reference path="../../bower_components/DefinitelyTyped/angularjs/legacy/angular-1.4.d.ts" />

"use strict";

module LoantypeAdvisor {

    class CountDownController {

        private number: number;

        static $inject = ['$timeout']; //fix minification
        constructor(private $timeout: ng.ITimeoutService) {
            this.number = 1000;
            this.countDown();
        }

        countDown(...selected) : void {

            this.$timeout(() => {
                this.number--;
                if (this.number >= 0) {
                    this.countDown();
                }
            }, 1000);
        }
    }

    export class CountDownDirective implements ng.IDirective {
        public templateUrl: string = 'secondModule/templates/countDown.html';
        public restrict: string = 'E';
        public controllerAs: string = 'vmCountDown';
        public controller: string = 'countDownController';
        public bindToController : boolean = true;
    }

    angular.module('secondModule')
        .controller('countDownController',  CountDownController)
        .directive('myOtherDirective', () => new CountDownDirective());
}
