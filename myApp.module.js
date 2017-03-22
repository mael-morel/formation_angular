
(function (){
    angular.module("myApp", [
        'ui.router'
    ]).config(configureRoutes);

    function configureRoutes($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('listAccounts', {
                url: '/listAccounts',
                template: '<h1>COUCOU</h1>'
            });
        $urlRouterProvider.otherwise('listAccounts');
    }
})();
