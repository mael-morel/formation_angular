
(function (){
    angular.module('accounts', [])
        .run(function(){
            console.log('Running accounts module');
        })
        .config(function(){
            console.log('Configuring accounts module');
        });
})();
