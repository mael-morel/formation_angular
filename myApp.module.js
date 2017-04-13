
(function (){
    angular.module('myApp', [
        'ui.router',
        'accounts'
    ]).config(configureRoutes);

    function configureRoutes($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('listAccounts', {
                url: '/listAccounts',
                controller: 'ListAccountsController as listAccountsCtrl',
                templateUrl: 'accounts/listAccounts.html'
            })
            .state('createAccount', {
                url: '/createAccount',
                    controller: 'CreateAccountController as createAccountCtrl',
                templateUrl: 'accounts/createAccount.html'
            });
        $urlRouterProvider.otherwise('listAccounts');
    }
})();
