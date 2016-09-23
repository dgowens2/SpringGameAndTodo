angular.module('TIYCocoAngularApp', [])
   .controller('CocoController', function($scope, $http, $timeout) {

        $scope.makeChocolate = function(numSmalls, numBigs, goalNum) {
            console.log("About to go get me some data!");
            $scope.name = "JavaScript Master Guru";

            $http.get("http://localhost:8080/coco.json?smalls=" + numSmalls + "&bigs=" + numBigs + "&goal=" + goalNum)
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.solver = response.data;
                        if ($scope.solver.hasSolution) {
                            $scope.userInput.numBigs = $scope.userInput.numBigs - $scope.solver.bigs;
                            $scope.userInput.numSmalls = $scope.userInput.numSmalls - $scope.solver.smalls;
                        } else {
                            console.log("ineligible solution")
                        }
                        console.log($scope.solver);
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data");
                    });
            console.log("Done with the promise - waiting for the callback");
        };

//        $scope.testTimeout = function () {
//            console.log("Timeout is running")
//            if ($scope.numBigs > 5) {
//                return
//            } else {
//                $scope.numBigs += 1;
//                $timeout($scope.testTimeout, 1000);
//            }
//            if ($scope.numSmalls > 5) {
//                return
//            } else {
//                $scope.numSmalls += 1;
//                $timeout($scope.testTimeout, 1000);
//            }
//            if ($scope.goalNum > 5) {
//                return
//            } else {
//                $scope.goalNum += 1;
//                $timeout($scope.testTimeout, 1000);
//            }
//        };

        $scope.testVar = function () {
            console.log("This should work");
        };

        $scope.printChocolate = function (numBigs, numSmalls, goalNum) {
            console.log($scope.userInput.numBigs);
            console.log($scope.userInput.numSmalls);
            console.log($scope.userInput.goalNum);
        };

        $scope.makeArray = function(arraySize) {
            var returnArray = [];
            for (var i = 0; i < arraySize; i++) {
                returnArray.push(i);
            } return returnArray;
        };

        console.log("JavaScript Properly initialized");
//        $scope.numBigs = 1;
//        $scope.numSmalls = 1;
//        $scope.goalNum = 1;
        $scope.userInput = {};
        $scope.solver = {};
        $timeout($scope.testTimeout, 1000)
   });