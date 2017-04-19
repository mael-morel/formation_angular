
(function (){
    angular.module('accounts', ['ngMessages'])
        .run(function(){
            console.log('Running accounts module');
        })
        .config(function(){
            console.log('Configuring accounts module');
        });
})();
