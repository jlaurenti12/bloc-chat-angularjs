(function() {
  function config($locationProvider, $stateProvider) {
  $locationProvider
      .html5Mode({
          enabled: true,
          requireBase: false
       });

  $stateProvider
      .state('chatroom', {
          url: '/',
          controller: 'chatRoomCtrl as chatroom',
          templateUrl: '/templates/chatroom.html'
      });
}

    angular
        .module('chat-app-6aa99', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
})();
