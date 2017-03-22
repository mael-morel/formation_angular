var firstApp = angular.module('FirstApp', []);

firstApp.controller('FirstController' , function (){

    var vm = this;
    vm.application = {'name': 'my application', 'size': 'small', 'length': 2};

    vm.printApplication = function() {
        console.log(vm.application);
    };

//    $scope.$watch('firstController.application.name', function(newValue) {
//        console.log("newValue : ", newValue);
//        //vm.application.name = 'badIdea ' + Math.random();
//    });
});
