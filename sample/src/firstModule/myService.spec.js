"use strict";

describe("My Service", function () {
    var myService;

    beforeEach(function () {
        module("firstModule");

        inject(function (_myService_) {
            myService = _myService_;
        });
    });

    describe("getTitle", function () {
        it('should return Hallo World', function () {
            //Arrange
            var expected;

            //Act
            expected = myService.getTitle();

            //Assert
            expect(expected).toBe('Hallo World');
        });
    });
});
