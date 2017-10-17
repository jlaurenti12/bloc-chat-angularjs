(function() {
    function RoomCtrl(rooms) {
      this.rooms = rooms.all;
    }

    angular
        .module('chat-app-6aa99')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
