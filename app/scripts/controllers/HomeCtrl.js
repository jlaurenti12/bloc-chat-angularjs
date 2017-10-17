(function() {
    function HomeCtrl() {
      this.title = "Home Page";
    }

    angular
        .module('chat-app-6aa99')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
