
(function (){
    angular.module("myApp", [
        'ui.router'
    ]).config(configureRoutes);

    function configureRoutes($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('listAccounts', {
                url: '/listAccounts',
                controller: 'ListAccountsController as listAccounts',
                templateUrl: 'listAccounts.html'
            })
            .state('createAccount', {
                url: '/createAccount',
                templateUrl: 'createAccount.html'
            });
        $urlRouterProvider.otherwise('listAccounts');
    }
})();
