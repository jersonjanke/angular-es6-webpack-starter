function exampleRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/example');
  $urlRouterProvider.when('/', '/example');

  $stateProvider
    .state('example', {
      url: '/example',
      component: 'example'
    })
}

export default exampleRoutes;
