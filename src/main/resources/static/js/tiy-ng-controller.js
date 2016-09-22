//angular.module('TIYAngularApp', []) //call the module
//   .controller('SampleController', function($scope, $http) { //dot notation call the controller "method"
//        $scope.name = "James"; //pass the parameters into the controller
//        $scope.whateverIWantToComeUpWith = "isn't that something";
//        $scope.testVar = {};
//        $scope.testVar.sampleContainerVar = "See!! It's real!!";
//        $scope.testVar.anotherSample = 12;
//        $scope.testVar.flagExample = false;
//        $scope.testVar.somethingThatDoesntExist = "it does exist!!!";
//
//        $scope.getGames = function() {
//            console.log("About to go get me some data!"); //similar to SysOut. Goes to browser developer console
//            $scope.name = "JavaScript Master Guru";
//
//            $http.get("http://localhost:8080/games.json") //this call is a blocking call, but it returns a promise
//                .then( //when the promise delivers, return this
//                    function successCallback(response) {
//                        console.log(response.data);  //this is the JSON object turned into a JavaScript object.
//                        console.log("Adding data to scope");
//                        $scope.games = response.data; //take the data that I just got back and put it into my scope into something called games.
//                    },
//                    function errorCallback(response) {
//                        console.log("Unable to get data");
//                    });
//            console.log("Done with the promise -- waiting for the callback");
//        };
//
//        $scope.newGame = {};
//    });//close the controller call

angular.module('TIYAngularApp', [])
   .controller('SampleController', function($scope, $http) {
        $scope.name = "James";
        $scope.testVar = {};
        $scope.testVar.sampleContainerVar = "See, it's real!!!!";
        $scope.testVar.anotherSample = 12;
        $scope.testVar.flagExample = true;
        $scope.testVar.somethingThatDoesntExist = "it does exist!!!";

        $scope.getGames = function() {
            console.log("About to go get me some data!");
            $scope.name = "JavaScript Master Guru";

            $http.get("http://localhost:8080/games.json")
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.games = response.data;
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data");
                    });

            console.log("Done with the promise - waiting for the callback");
        };

        $scope.newGame = {};
    });
